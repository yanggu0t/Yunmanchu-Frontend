import React from "react";

const Bookinginfo = () => {
  return (
    <div className="">
      <section className="mx-auto max-w-[1240px]">
        <div className="mx-5 my-16 flex flex-col justify-center md:my-20">
          <h1 className="font-title-xl pb-10 pt-6">蘊慢築民宿 旅客訂房須知</h1>
          <h2 className="font-title pb-5">訂房須知：</h2>
          <div className="h-80 overflow-y-auto rounded-lg border-4 border-solid border-green-700 p-3">
            <p className="font-content pb-3 lg:pb-5">
              ＊入住時請出示身分證件，以供登記與核對，無法單獨接待未滿18歲以下之旅客，如有尾款尚未支付請於入住時結清。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊如因行程可能延誤，無法在時間內辦理入住手續，請務必事先與旅宿電話溝通確認。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊請依預訂房型人數入住，如需加人或調整房間數量，請務必事先與旅宿協調。
            </p>
            <p className="font-content pb-3 lg:pb-5">＊旅宿內全面禁止吸菸。</p>
            <p className="font-content pb-3 lg:pb-5">
              ＊禁止使用任何違法藥物、毒品，違者若經發現一律報警處理。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊禁止舉辦轟趴、聚賭等違法行為，違者若經發現一律報警處理。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊禁止在屋內使用火燭、香菸、蠟燭等危險物品。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊請勿破壞旅宿裝潢與各項物品，退房時若經發現損壞或遺失，需照價賠償。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊晚間22：00過後請保持輕聲細語，勿大聲喧嘩，以維護住宿空間安寧及其他旅客權益。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊個人貴重物品請自行妥善保管，如有遺失恕不負責，敬請見諒。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              ＊若您因個人因素，須取消原訂單，請參考旅宿退款規定，將依照取消日期計算退款金額。
            </p>
          </div>
          <div className="m-10"></div>
          <h2 className="font-title pb-5">退款規定：</h2>
          <div className="h-80 overflow-y-auto rounded-lg border-4 border-solid border-green-700 p-3">
            <p className="font-content pb-3 lg:pb-5">
              以下為退款規定關於您的權益，為避免誤解與糾紛，請您充分了解並同意後再進行訂房
            </p>
            <p className="font-content pb-3 lg:pb-5">
              1.訂金付款後若須退款，訂金須扣除「訂金扣款金額」與「單次退款手續費」，詳細計算方式如下：
            </p>
            <p className="font-content pb-3 lg:pb-5">
              退款金額=訂金 x (1-訂金扣款百分比) - 單次退款手續費
            </p>
            <p className="font-content pb-3 lg:pb-5">
              2.訂金扣款百分比規定如下：
            </p>
            <p className="font-content pb-3 lg:pb-5">
              入住日（含）退房，訂金扣款100%。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              入住日前1天（含）退房，訂金扣款80%。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              入住日前2天（含）~前3天（含）退房，訂金扣款70%。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              入住日前4天（含）~前6天（含）退房，訂金扣款60%。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              入住日前7天（含）~前9天（含）退房，訂金扣款50%。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              入住日前10天（含）~前13天（含）退房，訂金扣款30%。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              入住日前14天（含）以前退房，訂金扣款0%。
            </p>
            <p className="font-content pb-3 lg:pb-5">[重要範例]</p>
            <p className="font-content pb-3 lg:pb-5">
              預訂4/30入住民宿（包含「連續入住該民宿同房型」與「連續入住該民宿不同房型」），則：
            </p>
            <p className="font-content pb-3 lg:pb-5">4/30為入住日</p>
            <p className="font-content pb-3 lg:pb-5">4/29為入住日前1天</p>
            <p className="font-content pb-3 lg:pb-5">4/28為入住日前2天</p>
            <p className="font-content pb-3 lg:pb-5">4/27為入住日前3天</p>
            <p className="font-content pb-3 lg:pb-5">......................</p>
            <p className="font-content pb-3 lg:pb-5">
              4/16為入住日前14天，以此類推。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              當旅客按下取消預訂按鈕時，系統會自動記錄取消日期，再依民宿退款規定進行退款。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              3.ATM轉帳、信用卡、銀聯卡、Paypal，訂單單次退款手續費為100新台幣。
            </p>
            <p className="font-content pb-3 lg:pb-5">
              4.若遇颱風（須中央氣象局發佈陸上颱風警報）或其他重大災害，而且民宿所在縣市宣布停止上班上課，訂金就可以選擇保留，延遲住房期限（六個月內），或扣除單次退款手續費後退還。
            </p>
          </div>
          <div className="font-content pt-5">
            若閱讀完須知確認沒有問題後，請點
            <a href="/booking-info#top" className=" text-green-500">
              {" "}
              回到最上方{" "}
            </a>
            再按立即訂房！
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookinginfo;
