
import { useQuery } from "@tanstack/react-query";
import {
  Wallet,
  Users,
  UtensilsCrossed,
  ShoppingBag,
  TrendingUp,
  RefreshCw,
  LayoutDashboard,
} from "lucide-react";

import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const statConfig = [
  {
    key: "revenue",
    title: "Total Revenue",
    description: "All recorded payments",
    icon: Wallet,
    color: "blue",
    format: (value) =>
      `$${Number(value ?? 0).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
  },
  {
    key: "users",
    title: "Total Users",
    description: "Registered customers",
    icon: Users,
    color: "green",
    format: (value) => Number(value ?? 0).toLocaleString(),
  },
  {
    key: "menuItems",
    title: "Menu Items",
    description: "Items in your menu",
    icon: UtensilsCrossed,
    color: "orange",
    format: (value) => Number(value ?? 0).toLocaleString(),
  },
  {
    key: "orders",
    title: "Total Orders",
    description: "All recorded orders",
    icon: ShoppingBag,
    color: "purple",
    format: (value) => Number(value ?? 0).toLocaleString(),
  },
];

const colorStyles = {
  blue: {
    card: "border-blue-100 bg-blue-50/70",
    icon: "bg-blue-100 text-blue-600",
    value: "text-blue-950",
    accent: "text-blue-600",
  },
  green: {
    card: "border-green-100 bg-green-50/70",
    icon: "bg-green-100 text-green-600",
    value: "text-green-950",
    accent: "text-green-600",
  },
  orange: {
    card: "border-orange-100 bg-orange-50/70",
    icon: "bg-orange-100 text-orange-600",
    value: "text-orange-950",
    accent: "text-orange-600",
  },
  purple: {
    card: "border-purple-100 bg-purple-50/70",
    icon: "bg-purple-100 text-purple-600",
    value: "text-purple-950",
    accent: "text-purple-600",
  },
};

const StatCard = ({ stat, value, isLoading }) => {
  const Icon = stat.icon;
  const styles = colorStyles[stat.color];

  return (
    <div
      className={`group rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${styles.card}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
        >
          <Icon size={24} strokeWidth={1.8} />
        </div>

        <TrendingUp
          size={20}
          className={`${styles.accent} opacity-70 transition group-hover:opacity-100`}
        />
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-500">
          {stat.title}
        </p>

        {isLoading ? (
          <div className="mt-2 h-9 w-32 animate-pulse rounded-lg bg-slate-200" />
        ) : (
          <h2
            className={`mt-2 wrap-break-word text-2xl font-bold tracking-tight sm:text-3xl ${styles.value}`}
          >
            {stat.format(value)}
          </h2>
        )}

        <p className="mt-2 text-xs text-slate-500">
          {stat.description}
        </p>
      </div>
    </div>
  );
};

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: stats,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <main className="min-h-screen bg-slate-50/70 p-4 sm:p-6 lg:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Dashboard heading */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-600">
              <LayoutDashboard size={17} />
              <span>Admin Dashboard</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Welcome back{user?.displayName ? `, ${user.displayName}` : ", Admin"}!
            </h1>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Here's what's happening with your restaurant today.
            </p>
          </div>

          <button
            onClick={() => refetch()}
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw
              size={16}
              className={isPending ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        {/* Error state */}
        {isError && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-5">
            <div>
              <h2 className="font-semibold text-red-800">
                Could not load dashboard statistics
              </h2>
              <p className="mt-1 text-sm text-red-600">
                {error?.response?.data?.message ||
                  error?.message ||
                  "Please try again."}
              </p>
            </div>

            <button
              onClick={() => refetch()}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Try again
            </button>
          </div>
        )}

        {/* Stats grid */}
        <section
          aria-label="Restaurant statistics"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {statConfig.map((stat) => (
            <StatCard
              key={stat.key}
              stat={stat}
              value={stats?.[stat.key]}
              isLoading={isPending && !isError}
            />
          ))}
        </section>

        {/* Add your charts below this section */}
      </div>
    </main>
  );
};

export default AdminHome;
