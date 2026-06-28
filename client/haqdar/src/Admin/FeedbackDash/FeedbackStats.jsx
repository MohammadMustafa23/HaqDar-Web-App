import { MessageSquareText, MailOpen, Clock3 } from "lucide-react";

export default function FeedbackStats() {
  return (
    <div className="fm-stats">
      <div className="fm-stat-card">
        <div className="fm-stat-icon">
          <MessageSquareText size={24} />
        </div>

        <div>
          <p className="fm-stat-label">Total Feedbacks</p>

          <h2>1,284</h2>
        </div>
      </div>

      <div className="fm-stat-card">
        <div className="fm-stat-icon blue">
          <MailOpen size={24} />
        </div>

        <div>
          <p className="fm-stat-label">Unread</p>

          <h2>42</h2>
        </div>
      </div>

      <div className="fm-stat-card">
        <div className="fm-stat-icon purple">
          <Clock3 size={24} />
        </div>

        <div>
          <p className="fm-stat-label">Recent (Last 24h)</p>

          <h2>18</h2>
        </div>
      </div>
    </div>
  );
}
