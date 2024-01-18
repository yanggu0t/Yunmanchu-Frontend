import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import BookingButton from "@/components/modals/BookingButton";
import { AnnouncementType } from "@/types/announcementTypes";

export default function Banner({
  isLoading,
  visible,
  OnClose,
  announcements,
  animateDelay,
}: {
  isLoading: boolean;
  visible: boolean;
  OnClose: () => void; // 接管了 header 組件的 bannerVisible 用於在此關閉 banner
  announcements: AnnouncementType[]; // announcements 是 header 組件 props 過來的公告內容
  animateDelay: number; // animateDelay 從 header 組件 props 過來的動畫延遲
}) {
  // 當 visible 為 false 不顯示組件
  if (!visible) return null;
  if (announcements.length > 0 && announcements[0].visible === false)
    return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay: animateDelay }}
      className=" bg-emerald-700"
    >
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-emerald-800 p-2">
              <MegaphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>{" "}
            {isLoading ? (
              <>
                <p className="ml-3 font-medium text-white">
                  <span className="md:hidden">讀取中...</span>
                  <span className="hidden md:inline">讀取中...</span>
                </p>
              </>
            ) : null}
            {announcements.map(
              (announcements, index) =>
                announcements && (
                  <div key={index}>
                    <p className="ml-3 font-medium text-white">
                      <span className="md:hidden">
                        {announcements.announcement}
                      </span>
                      <span className="hidden md:inline">
                        {announcements.announcement}
                      </span>
                    </p>
                  </div>
                ),
            )}
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            {/* <div className="flex items-center justify-center cursor-pointer rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-sm hover:bg-emerald-50"> */}
            <BookingButton section="BannerSection" />
            {/* </div> */}
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              title="關閉公告"
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <XMarkIcon
                onClick={OnClose}
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
