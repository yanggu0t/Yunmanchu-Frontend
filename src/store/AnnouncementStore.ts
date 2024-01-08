import { create } from "zustand";
import { AnnouncementType, AnnouncementStore } from "@/types/announcementTypes";

export const useAnnouncementStore = create<AnnouncementStore>((set) => ({
  announcements: [],
  isLoading: true,
  setAnnouncements: async (announcements?: AnnouncementType[]) => {
    if (!announcements) {
      set({ isLoading: true });
      try {
        const res = await fetch("https://api.yunmanchu.com/announcement");
        const data = await res.json();
        set({ announcements: data, isLoading: false });
      } catch (error) {
        console.log(error);
        set({ isLoading: false });
        const errorAnnouncements = (
          useAnnouncementStore.getState().announcements || []
        ).map((announcements) => ({
          ...announcements,
          visible: false,
        }));
        set({ announcements: errorAnnouncements, isLoading: false });
      }
    }
  },
}));
