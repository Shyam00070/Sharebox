
function ActivityMarquee() {
  const activities = [
    { text: "Vignesh offered Scientific Calculator", time: "2m ago", color: "bg-indigo-500" },
    { text: "Meera gifted a textbook to Sneha", time: "4m ago", color: "bg-indigo-500" },
    { text: 'Karthik claimed Dell 24" UltraSharp Monitor', time: "11m ago", color: "bg-amber-400" },
    { text: "Pooja offered Wooden Study Chair in Guindy Hub", time: "18m ago", color: "bg-indigo-500" },
    { text: "Arjun handed over Calculus Textbook to Sneha", time: "24m ago", color: "bg-indigo-500" },
  ];

  const repeatedActivities = [...activities, ...activities];

  return (
    <div className="flex h-10 w-full items-center overflow-hidden border-b border-slate-800 bg-[#080B14] text-slate-300">

   
      <div className="z-10 flex h-full shrink-0 items-center gap-2.5 border-r border-slate-800 bg-[#080B14] px-5 font-mono text-[11px] font-bold tracking-[1px] text-indigo-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
        </span>

        LIVE ACTIVITY
      </div>

 
      <div className="group flex min-w-0 flex-1 overflow-hidden">
        <div className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {repeatedActivities.map((activity, index) => (
            <div
              key={index}
              className="flex h-10 shrink-0 items-center gap-2.5 px-6 text-xs"
            >
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${activity.color}`} />

              <span className="whitespace-nowrap font-medium text-slate-200">
                {activity.text}
              </span>

              <span className="whitespace-nowrap text-[11px] text-slate-500">
                {activity.time}
              </span>

              <span className="ml-4 h-4 w-px bg-slate-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityMarquee;
