export interface AnnouncementType {
  id: number;
  visible: boolean;
  announcement: string;
  updatedAt: string;
}

export interface AnnouncementStore {
  announcements: AnnouncementType[];
  isLoading: boolean;
  animateDelay: number;
  setAnnouncements: (announcements?: AnnouncementType[]) => void;
}
