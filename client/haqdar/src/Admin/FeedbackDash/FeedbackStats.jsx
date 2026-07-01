import { useMemo } from "react";
import { MessageSquareText, MailOpen, Clock3 } from "lucide-react";

export default function FeedbackStats({ feedbacks = [] }) {
  const stats = useMemo(() => {
    const total = feedbacks.length;

    const unread = feedbacks.filter(({ status }) => status === "Unread").length;

    const recent = feedbacks.filter(({ createdAt }) => {
      const diff = Date.now() - new Date(createdAt).getTime();

      return diff >= 0 && diff <= 24 * 60 * 60 * 1000;
    }).length;

    return [
      {
        title: "Total Feedbacks",
        value: total,
        icon: MessageSquareText,
        color: "",
      },
      {
        title: "Unread",
        value: unread,
        icon: MailOpen,
        color: "blue",
      },
      {
        title: "Recent (Last 24h)",
        value: recent,
        icon: Clock3,
        color: "purple",
      },
    ];
  }, [feedbacks]);

  return (
    <section className="fm-stats" aria-label="Feedback Statistics">
      {stats.map(({ title, value, icon: Icon, color }) => (
        <article key={title} className="fm-stat-card">
          <div className={`fm-stat-icon ${color}`}>
            <Icon size={22} strokeWidth={2} />
          </div>

          <div className="fm-stat-content">
            <p className="fm-stat-label">{title}</p>

            <h2 className="fm-stat-value">{value.toLocaleString()}</h2>
          </div>
        </article>
      ))}
    </section>
  );
}
