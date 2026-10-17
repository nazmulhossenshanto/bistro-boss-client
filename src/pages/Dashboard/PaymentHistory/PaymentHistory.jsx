
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const formatDate = (date) => {
  if (!date) return "—";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "—";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: payments = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  const totalSpent = payments.reduce(
    (total, payment) => total + Number(payment.price || 0),
    0
  );

  if (loading) {
    return (
      <div className="p-6 text-center text-slate-500">
        Loading account...
      </div>
    );
  }

  if (!user?.email) {
    return (
      <div className="m-4 rounded-xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">
          Please log in
        </h2>
        <p className="mt-2 text-slate-500">
          Log in to view your payment history.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f6f6f6] px-4 py-10 sm:px-6 lg:px-10">
      {/* Section title */}
      <div className="mx-auto mb-10 max-w-md text-center">
        <p className="mb-2 text-sm italic text-amber-500">
          --- At a Glance! ---
        </p>

        <div className="mx-auto mb-3 h-0.5 w-3/4 bg-slate-200" />

        <h1 className="text-2xl font-medium tracking-wide text-slate-800 sm:text-3xl">
          PAYMENT HISTORY
        </h1>

        <div className="mx-auto mt-3 h-0.5 w-3/4 bg-slate-200" />
      </div>

      {/* Payment table card */}
      <div className="mx-auto max-w-6xl rounded-sm bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-serif text-xl font-bold uppercase text-slate-800">
              Total Payments: {isPending ? "..." : payments.length}
            </h2>

            {!isPending && payments.length > 0 && (
              <p className="mt-1 text-sm text-slate-500">
                Total spent: $
                {totalSpent.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => refetch()}
            disabled={isPending}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-amber-500 hover:text-amber-600 disabled:opacity-50"
          >
            Refresh
          </button>
        </div>

        {/* Error state */}
        {isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center">
            <p className="font-medium text-red-700">
              Failed to load payment history.
            </p>

            <p className="mt-1 text-sm text-red-600">
              {error?.response?.data?.message ||
                error?.message ||
                "Please try again."}
            </p>

            <button
              onClick={() => refetch()}
              className="mt-4 rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Try again
            </button>
          </div>
        )}

        {/* Loading skeleton */}
        {isPending && !isError && (
          <div className="animate-pulse space-y-4">
            <div className="h-11 rounded-lg bg-amber-100" />

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-12 rounded-lg bg-slate-100"
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isPending && !isError && payments.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 px-5 py-14 text-center">
            <div className="mb-3 text-4xl">🧾</div>

            <h3 className="text-lg font-semibold text-slate-800">
              No payments yet
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Your completed payment history will appear here.
            </p>
          </div>
        )}

        {/* Responsive table */}
        {!isPending && !isError && payments.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-162.5 border-collapse text-left">
              <thead>
                <tr className="bg-[#d5a253] text-xs uppercase text-white">
                  <th className="rounded-tl-lg px-5 py-4 font-semibold">
                    Email
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    Category
                  </th>
                  <th className="px-5 py-4 font-semibold">
                    Total Price
                  </th>
                  <th className="rounded-tr-lg px-5 py-4 font-semibold">
                    Payment Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {payments.map((payment) => (
                  <tr
                    key={payment._id}
                    className="border-b border-slate-200 text-sm text-slate-500 transition hover:bg-amber-50/50"
                  >
                    <td className="px-5 py-5">
                      {payment.email}
                    </td>

                    <td className="px-5 py-5">
                      Food Order
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 font-medium text-slate-700">
                      $
                      {Number(payment.price || 0).toFixed(2)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5">
                      {formatDate(
                        payment.createdAt || payment.date
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentHistory;
