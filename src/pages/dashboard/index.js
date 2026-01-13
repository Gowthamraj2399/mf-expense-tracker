import React from "react";
import StatsCard from "../../components/dashboard/StatsCard";
import BarChart from "../../components/dashboard/BarChart";
import ProgressBar, {
  PortfolioChart,
} from "../../components/dashboard/ProgressBar";
import EMIList from "../../components/dashboard/EMIList";
import GoalsList from "../../components/dashboard/GoalsList";
import RecurringList from "../../components/dashboard/RecurringList";
import { dashboardConfig } from "../../config/dashboardConfig";

const DashboardPage = () => {
  const {
    stats,
    incomeExpenseChart,
    portfolio,
    upcomingEmis,
    savingsGoals,
    recurringPayments,
  } = dashboardConfig;

  return (
    <div className="w-full mx-auto px-8 py-4 max-w-[85vw]">
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-end gap-2 mb-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">
            Welcome back, Alex
          </h1>
          <p className="text-text-secondary text-xs md:text-sm">
            Here is your financial overview for October
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-8 px-3 bg-white dark:bg-surface-dark border border-[#e5e7eb] dark:border-surface-highlight text-xs font-medium hover:bg-gray-50 dark:hover:bg-surface-highlight/30 transition-colors">
            <span className="material-symbols-outlined text-[16px] mr-1">
              download
            </span>
            Export
          </button>
          <button className="flex items-center justify-center rounded-lg h-8 px-3 bg-primary text-white text-xs font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
            <span className="material-symbols-outlined text-[16px] mr-1">
              add
            </span>
            Add Transaction
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
        {stats.map((stat) => (
          <StatsCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <BarChart {...incomeExpenseChart} />

        {/* Portfolio Allocation */}
        <div className="lg:col-span-1 rounded-xl bg-white dark:bg-surface-dark border border-[#e5e7eb] dark:border-surface-highlight p-4 shadow-sm flex flex-col">
          <div className="mb-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {portfolio.title}
            </h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {portfolio.total}
              </span>
              <span
                className={`text-xs font-medium ${
                  portfolio.changeType === "positive"
                    ? "text-[#0bda5b]"
                    : "text-orange-500"
                }`}
              >
                {portfolio.change}
              </span>
            </div>
          </div>
          <PortfolioChart allocations={portfolio.allocations} />
        </div>
      </div>

      {/* Bottom Row: EMIs, Goals, Recurring */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <EMIList emis={upcomingEmis} />
        <GoalsList goals={savingsGoals} />
        <RecurringList {...recurringPayments} />
      </div>
    </div>
  );
};

export default DashboardPage;
