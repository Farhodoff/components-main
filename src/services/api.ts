import { supabase } from "@/lib/supabase";

export interface Task {
    id: string;
    title: string;
    description?: string;
    tag?: string;
    status: "todo" | "in-progress" | "done";
    created_at: string;
}

export interface Payment {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
    created_at: string;
}

export const api = {
    getTasks: async () => {
        const { data, error } = await supabase
            .from("tasks")
            .select("*")
            .order("created_at", { ascending: true });

        if (error) throw error;
        return data as Task[];
    },

    updateTaskStatus: async (id: string, status: string) => {
        const { data, error } = await supabase
            .from("tasks")
            .update({ status })
            .eq("id", id)
            .select();

        if (error) throw error;
        return data;
    },

    createTask: async (task: Omit<Task, "id" | "created_at">) => {
        const { data, error } = await supabase
            .from("tasks")
            .insert(task)
            .select()
            .single();

        if (error) throw error;
        return data as Task;
    },

    getPayments: async () => {
        const { data, error } = await supabase
            .from("payments")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data as Payment[];
    }
};
