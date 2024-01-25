import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "5+ Projects Completed",
    "1+ Years of Freelancing",
    "99% Client Satisfaction",
    "400+ Subscribers",
    "Authored 10+ Blogs on Coderlegion"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
