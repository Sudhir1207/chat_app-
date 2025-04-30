import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import io from "socket.io-client";
import axios from "axios";

const BASE_URL = "http://localhost:5001";
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isUpdatingUsername: false,
  isDeletingAccount: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      console.log(res.data);
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile Uploaded successfully");
    } catch (error) {
      console.log("Error updating profile", error);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  updateUsername: async (data) => {
    set({ isUpdatingUsername: true });
    try {
      const res = await axiosInstance.put("/auth/change-username", data);
      set({ authUser: res.data });
      toast.success("Username updated successfully");
    } catch (error) {
      console.log("Error updating username");
      toast.error("Failed to update username");
    } finally {
      set({ isUpdatingUsername: false });
    }
  },

  deleteAccount: async () => {
    set({ isDeletingAccount: true });
    try {
      await axiosInstance.delete("/auth/delete-account");
      set({ authUser: null });
      toast.success("Account deleted successfully");
      get().disconnectSocket();
    } catch (error) {
      console.log("Error deleting account", error.message);
      toast.error("Failed to delete account");
    } finally {
      set({ isDeletingAccount: false });
    }
  },

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;
    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();
    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
