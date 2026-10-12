import { motion } from "framer-motion";
import { BedDouble, Check, ChefHat, Clock, QrCode, Sparkles, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

/* All data below is illustrative sample data for product demonstrations. */

const statusStyle: Record<string, string> = {
  Vacant: "bg-success/15 text-success border-success/30",
  Occupied: "bg-electric/15 text-electric border-electric/30",
  Dirty: "bg-amber/25 text-navy border-amber/50",
  Maintenance: "bg-destructive/10 text-destructive border-destructive/30",
};
const order = ["Vacant", "Occupied", "Dirty", "Maintenance"] as const;

function Frame({ title, children, dark = false }: { title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-2xl shadow-deep ${dark ? "bg-navy-soft text-ivory" : "bg-card"}`}>
      <div className={`flex items-center gap-2 border-b px-4 py-3 ${dark ? "border-ivory/10" : ""}`}>
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-success" />
        <span className={`ml-3 text-xs font-medium ${dark ? "text-slate" : "text-muted-foreground"}`}>{title}</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-slate">Sample data</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function RoomGrid() {
  const [rooms, setRooms] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({ no: 101 + i + (i > 5 ? 94 : 0), s: order[(i * 7) % 4] as string })),
  );
  const cycle = (i: number) =>
    setRooms((r) => r.map((x, j) => (j === i ? { ...x, s: order[(order.indexOf(x.s as never) + 1) % 4] ?? "Vacant" } : x)));
  return (
    <Frame title="Rooms · Today">
      <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
        {order.map((o) => (
          <span key={o} className={`rounded-full border px-2 py-0.5 ${statusStyle[o]}`}>{o}</span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {rooms.map((r, i) => (
          <motion.button
            layout
            whileTap={{ scale: 0.94 }}
            key={r.no}
            onClick={() => cycle(i)}
            className={`rounded-xl border p-2 text-left transition-colors ${statusStyle[r.s]}`}
            aria-label={`Room ${r.no}, ${r.s}. Click to change status`}
          >
            <BedDouble className="h-4 w-4" />
            <div className="mt-1 font-display text-sm font-bold">{r.no}</div>
            <div className="text-[10px]">{r.s}</div>
          </motion.button>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Tap a room to change its status.</p>
    </Frame>
  );
}

const kotStages = ["New", "Preparing", "Ready", "Served"] as const;
export function KotBoard() {
  const [tickets, setTickets] = useState([
    { id: 41, where: "Room 204", items: "2× Masala Omelette, 1× Coffee", st: 0 },
    { id: 42, where: "Table 3", items: "1× Grilled Fish, 1× Lime Soda", st: 1 },
    { id: 43, where: "Room 108", items: "1× Club Sandwich", st: 2 },
  ]);
  const advance = (id: number) => setTickets((t) => t.map((k) => (k.id === id ? { ...k, st: Math.min(3, k.st + 1) } : k)));
  return (
    <Frame title="Kitchen Order Tickets" dark>
      <div className="space-y-2">
        {tickets.map((k) => (
          <motion.div layout key={k.id} className="flex items-center gap-3 rounded-xl bg-ivory/5 p-3">
            <ChefHat className="h-5 w-5 shrink-0 text-amber" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold">KOT #{k.id} · {k.where}</div>
              <div className="truncate text-xs text-slate">{k.items}</div>
            </div>
            <button
              onClick={() => advance(k.id)}
              disabled={k.st === 3}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                k.st === 3 ? "bg-success/20 text-success" : "bg-electric text-primary-foreground hover:bg-electric/80"
              }`}
            >
              {kotStages[k.st]}{k.st < 3 && " →"}
            </button>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

export function InvoiceMock() {
  const lines = [
    ["Room 204 · Deluxe · 2 nights", 6400],
    ["Restaurant · KOT #41", 520],
    ["Laundry", 180],
  ] as const;
  const total = lines.reduce((a, [, v]) => a + v, 0);
  const paid = 4000;
  return (
    <Frame title="Guest folio · INV-0192">
      <div className="space-y-2 text-sm">
        {lines.map(([l, v]) => (
          <div key={l} className="flex justify-between"><span className="text-muted-foreground">{l}</span><span className="font-medium">{v.toLocaleString()}</span></div>
        ))}
        <div className="flex justify-between border-t pt-2 font-semibold"><span>Total</span><span>{total.toLocaleString()}</span></div>
        <div className="flex justify-between text-success"><span>Advance received</span><span>−{paid.toLocaleString()}</span></div>
        <div className="flex justify-between rounded-lg bg-amber/20 px-2 py-1.5 font-bold"><span>Balance due</span><span>{(total - paid).toLocaleString()}</span></div>
      </div>
    </Frame>
  );
}

export function ChartMock() {
  const data = [62, 71, 58, 80, 86, 92, 77];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <Frame title="Occupancy · This week" dark>
      <div className="flex h-40 items-end gap-2">
        {data.map((v, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-t-md bg-brand-gradient"
              initial={{ height: 0 }}
              whileInView={{ height: `${v}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
            />
            <span className="text-[10px] text-slate">{days[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[["Arrivals", "8"], ["Departures", "5"], ["In-house", "21"]].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-ivory/5 py-2"><div className="font-display text-lg font-bold">{v}</div><div className="text-[10px] text-slate">{k}</div></div>
        ))}
      </div>
    </Frame>
  );
}

export function TaskMock() {
  const [tasks, setTasks] = useState([
    { t: "Clean Room 106 · Checkout", who: "Asha", pri: "High", done: false, icon: Sparkles },
    { t: "Inspect Room 201", who: "Supervisor", pri: "Normal", done: false, icon: Check },
    { t: "Fix AC · Room 112", who: "Maintenance", pri: "Urgent", done: false, icon: Wrench },
    { t: "Restock minibar · 204", who: "Ravi", pri: "Low", done: true, icon: Sparkles },
  ]);
  return (
    <Frame title="Housekeeping board">
      <ul className="space-y-2">
        {tasks.map((k, i) => (
          <li key={k.t}>
            <button
              onClick={() => setTasks((ts) => ts.map((x, j) => (j === i ? { ...x, done: !x.done } : x)))}
              className="flex w-full items-center gap-3 rounded-xl border p-3 text-left hover:border-electric/50"
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded-md border ${k.done ? "border-success bg-success text-primary-foreground" : ""}`}>
                {k.done && <Check className="h-3.5 w-3.5" />}
              </span>
              <span className={`flex-1 text-sm ${k.done ? "text-muted-foreground line-through" : "font-medium"}`}>{k.t}</span>
              <span className="text-xs text-muted-foreground">{k.who}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${k.pri === "Urgent" ? "bg-destructive/10 text-destructive" : k.pri === "High" ? "bg-amber/25" : "bg-secondary"}`}>{k.pri}</span>
            </button>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function PhoneMock() {
  const [sent, setSent] = useState<string | null>(null);
  const items = ["Room service menu", "Extra towels", "Housekeeping", "Report an issue", "Request checkout"];
  return (
    <div className="animate-float mx-auto w-64 rounded-[2.5rem] border-[10px] border-navy bg-card p-4 shadow-deep">
      <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-navy/20" />
      <div className="flex items-center gap-2"><QrCode className="h-5 w-5 text-electric" /><span className="font-display text-sm font-bold">Room 204</span></div>
      <p className="mt-1 text-xs text-muted-foreground">How can we help?</p>
      <div className="mt-3 space-y-2">
        {items.map((i) => (
          <button key={i} onClick={() => setSent(i)} className="w-full rounded-xl bg-secondary px-3 py-2.5 text-left text-sm font-medium hover:bg-electric hover:text-primary-foreground">
            {i}
          </button>
        ))}
      </div>
      <div className="mt-3 h-10 text-xs">
        {sent && (
          <motion.p key={sent} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-1 text-success">
            <Check className="h-3.5 w-3.5" /> "{sent}" sent to front desk
          </motion.p>
        )}
      </div>
    </div>
  );
}

export function AiMock() {
  const lines = [
    "Good morning. 8 arrivals and 5 departures today.",
    "2 folios have balances older than 3 days (Rooms 108, 112).",
    "Room 112 AC ticket is open for 26 hours — consider escalation.",
    "Draft reply ready for the group enquiry from 14 Nov. Review before sending.",
  ];
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= lines.length) return;
    const t = setTimeout(() => setN(n + 1), 900);
    return () => clearTimeout(t);
  }, [n, lines.length]);
  return (
    <Frame title="Daily operations summary" dark>
      <div className="flex items-center gap-2 text-sm text-amber"><Sparkles className="h-4 w-4" /> Wayinn Assist</div>
      <ul className="mt-3 space-y-2">
        {lines.slice(0, n).map((l) => (
          <motion.li key={l} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="rounded-lg bg-ivory/5 p-2.5 text-sm">{l}</motion.li>
        ))}
        {n < lines.length && <li className="flex items-center gap-1 text-xs text-slate"><Clock className="h-3 w-3 animate-pulse-dot" /> generating…</li>}
      </ul>
      <p className="mt-3 text-[11px] text-slate">Suggestions are reviewed by your staff before any action is taken.</p>
    </Frame>
  );
}

export function CalendarMock() {
  const rows = ["101", "102", "103", "201", "202"];
  const bookings: Record<string, [number, number, string][]> = {
    "101": [[0, 3, "Mehta"]], "102": [[2, 5, "Group · Rao"]], "103": [[1, 2, "Fernandes"], [4, 6, "Khan"]],
    "201": [[0, 1, "Silva"], [3, 7, "Iyer"]], "202": [[5, 7, "Walk-in"]],
  };
  return (
    <Frame title="Reservation calendar">
      <div className="grid grid-cols-[48px_repeat(7,1fr)] gap-1 text-[10px]">
        <div />
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <div key={i} className="text-center text-muted-foreground">{d}</div>)}
        {rows.map((r) => (
          <div key={r} className="contents">
            <div className="py-1.5 font-semibold">{r}</div>
            <div className="relative col-span-7 h-7 rounded-md bg-secondary">
              {(bookings[r] ?? []).map(([s, e, n]) => (
                <motion.div
                  key={n}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ left: `${(s / 7) * 100}%`, width: `${((e - s) / 7) * 100}%`, transformOrigin: "left" }}
                  className="absolute inset-y-0.5 truncate rounded bg-electric px-1.5 py-1 text-[10px] font-medium text-primary-foreground"
                >
                  {n}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export const mocks = {
  rooms: RoomGrid, kot: KotBoard, invoice: InvoiceMock, chart: ChartMock, tasks: TaskMock,
  phone: PhoneMock, ai: AiMock, calendar: CalendarMock,
};
export type MockKey = keyof typeof mocks;
