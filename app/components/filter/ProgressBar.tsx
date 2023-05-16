export enum Currency {
  uah = "uah",
  usd = "usd",
  eur = "eur",
}

export enum CurrencyIcons {
  uah = "\u20B4",
  usd = "\u0024",
  eur = "\u20AC",
}

interface IProgressBarData {
  percent: number;
  cash: number;
  currency?: Currency | string;
}

interface IIcons {
  [key: string]: string;
}

export default function ProgressBar(data: IProgressBarData) {
  const { percent, cash, currency = Currency.usd } = data;
  const styleCompleted = { width: `${percent}%` };
  const currencyIcons = Object.entries(CurrencyIcons).reduce(
    (acc: IIcons, elem) => {
      acc[elem[0]] = elem[1];
      return acc;
    },
    {}
  );

  return (
    <div className="h-[32px] w-100 progressBar">
      <div className="flex font-semibold justify-between">
        <div className="text-red">{percent}%</div>
        <div className="text-green-pressed">
          <span className="text-red">{`${currencyIcons[currency]}${cash
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}</span>{" "}
        </div>
      </div>
      <div className="w-full h-[4px] bg-black rounded">
        <div className="h-[4px] bg-red rounded" style={styleCompleted}></div>
      </div>
    </div>
  );
}
