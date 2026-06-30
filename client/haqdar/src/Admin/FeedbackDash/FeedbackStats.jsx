import { MessageSquareText, MailOpen, Clock3 } from "lucide-react";

export default function FeedbackStats({ feedbacks }) {
  const totalFeedbacks = feedbacks.length;

  const unreadFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "Unread",
  ).length;

 const recentFeedbacks = feedbacks.filter((feedback) => {
  const createdTime = new Date(feedback.createdAt).getTime();
  const diff = Date.now() - createdTime;

  return diff >= 0 && diff <= 24 * 60 * 60 * 1000;
}).length;

  return (
    <div className="fm-stats">
      <div className="fm-stat-card">
        <div className="fm-stat-icon">
          <MessageSquareText size={24} />
        </div>

        <div>
          <p className="fm-stat-label">Total Feedbacks</p>
          <h2>{totalFeedbacks}</h2>
        </div>
      </div>

      <div className="fm-stat-card">
        <div className="fm-stat-icon blue">
          <MailOpen size={24} />
        </div>

        <div>
          <p className="fm-stat-label">Unread</p>
          <h2>{unreadFeedbacks}</h2>
        </div>
      </div>

      <div className="fm-stat-card">
        <div className="fm-stat-icon purple">
          <Clock3 size={24} />
        </div>

        <div>
          <p className="fm-stat-label">Recent (Last 24h)</p>
          <h2>{recentFeedbacks}</h2>
        </div>
      </div>
    </div>
  );
}
