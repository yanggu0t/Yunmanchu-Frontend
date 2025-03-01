import { create } from "zustand";
import { AnnouncementType, AnnouncementStore } from "@/types/announcementTypes";

export const useAnnouncementStore = create<AnnouncementStore>((set, get) => ({
  announcements: [], // 存儲公告的陣列
  isLoading: true, // 控制加載狀態的標誌
  animateDelay: 1.5, // 動畫延遲時間（秒）

  // 設置公告的函數，可選參數為公告陣列
  setAnnouncements: async (announcements?: AnnouncementType[]) => {
    // 若未提供 announcements 參數，則從 API 獲取資料
    if (!announcements) {
      set({ isLoading: true }); // 啟動加載狀態

      try {
        // 從 API 獲取資料
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
        const data = await res.json();

        // 將 API 回傳的資料轉換為 AnnouncementType 格式
        const announcement: AnnouncementType = {
          id: data.json._id,
          visible: data.json.visible,
          announcement: data.json.announcement,
          updatedAt: data.json.updatedAt,
        };

        // 更新狀態，設置公告並關閉加載標誌
        set({ announcements: [announcement] });

        // 延遲關閉加載標誌以改善用戶體驗
        setTimeout(
          () => {
            set({ isLoading: false });
          },
          (get().animateDelay + 0.8) * 1000,
        );
      } catch (error) {
        console.log(error); // 記錄錯誤信息

        // 創建一個符合 AnnouncementType 類型的錯誤公告
        const errorAnnouncement = {
          id: -1, // 可以使用一個特殊的 id，表示這是一個錯誤公告
          announcement: "無法加載公告", // 錯誤信息
          updatedAt: new Date().toISOString(), // 當前時間作為更新時間
          visible: false, // 可見性設置為 false
        };

        set({ announcements: [errorAnnouncement], isLoading: false });
      }
    }
  },
}));
