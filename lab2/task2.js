// ЗАДАЧА 2.1

function task21(ops) {
    const opsCount = {};

    ops.forEach(({ month }) => {
        opsCount[month] = (opsCount[month] || 0) + 1;
    });

    const sortMonths = Object.keys(opsCount).map(month => ({
        year: 2019,
        month: Number(month),
        opsCount: opsCount[month]
    })).sort((a, b) => b.opsCount - a.opsCount);

    return sortMonths.slice(0, 3);
}
//task21(ops)

// ЗАДАЧА 2.2

function task22(year, month, ops) {
    const opsPerMonth = ops.filter(item => item.year === year && item.month === month);

    let totalReplenishment = 0;
    let totalWithdrawal = 0;
    opsPerMonth.forEach(item => {
        if (item.type === "replenishment") {
            totalReplenishment += item.amount;
        } else if (item.type === "withdrawal") {
            totalWithdrawal += item.amount;
        }
    });

    const monthBalance = totalReplenishment - totalWithdrawal;
    const withdrawalRate = totalWithdrawal / totalReplenishment;

    let rank = "";
    if (withdrawalRate < 0.15) {
        rank = "Золотой";
    } else if (withdrawalRate < 0.3) {
        rank = "Серебряный";
    } else rank = "Бронзовый"

    let day = 31
    const result = {
        date: `${year}-${month}-${day}`,
        monthBalance: monthBalance,
        monthWithdrawal: totalWithdrawal,
        withdrawalRate: withdrawalRate.toFixed(4),
        rank: rank
    };

    return result;
}
//task22(2019, 01, ops)

//ЗАДАЧА 2.3

function task23(ops) {
    const results = [];

    let balance = 0;
    let year = 2019;
    for (let month = 1; month <= 12; month++) {
        const monthStats = task22(year, month, ops);

        balance += monthStats.monthBalance;

        monthStats.totalBalance = balance;

        results.push(monthStats);
    }

    return results;
}
//task23(ops)