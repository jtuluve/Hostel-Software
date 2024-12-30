'use client'
import { Children, createContext, PropsWithChildren, useContext } from "react";

type Props = {
  name: string;
  year: string;
  id: string;
  reason: string;
  startDate: Date;
  endDate: Date;
};

type CardProps = PropsWithChildren & {
  prop: Props;
};


type ChildrenProps = {
  className: string
}

let cardContext = createContext<CardProps | undefined>(undefined);
function cardContextValue() {
  const context = useContext(cardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }
  return context;
}

export default function Card({children, prop}: CardProps) {
  return (
        <cardContext.Provider value={{ prop }}>
      <div className="max-w-7xl bg-[#fdfee9] rounded-lg shadow-md mx-auto">
          {children}
      </div>
          </cardContext.Provider>
  );
}

Card.Details = function CardDetails({children}:PropsWithChildren) {
  return (
    <div className="flex justify-between items-center px-16 pt-4 pb-4">
      {children}
    </div>
  );
};


Card.UserDescription = function UserDescription({className}:ChildrenProps) {
  console.log(className)
  const { prop } = cardContextValue();
  return(
    <div>
        <p className={`text-lg font-semibold text-[#8b8274] ${className}`} >{prop.name}</p>
        <p className={`text-sm text-[#8b8274] ${className}`}>{prop.year}</p>
        <p className={`text-sm text-[#8b8274] ${className}`}>{prop.id}</p>
      </div>
  )
}


Card.UserReason = function UserReason({className}:ChildrenProps) {
  const { prop } = cardContextValue();
  return(
    <div className="text-center">
        <p className={`text-lg font-medium text-[#8b8274] ${className}`}>{prop.reason}</p>
    </div>
  )
}

Card.UserLeaveDate = function UserLeaveDate({className}:ChildrenProps) {
  const { prop } = cardContextValue();
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit", 
      year: "numeric",
    });
  };
  return(
    <div className="text-right">
        <span className={`text-sm text-[#8b8274] ${className}`}>{formatDate(prop.startDate)}</span>
        <span className={`text-sm text-[#8b8274] text-center px-5 ${className}`}>-</span>
        <span className={`text-sm text-[#8b8274] ${className}`}>{formatDate(prop.endDate)}</span>
      </div>
  )
}


Card.HorizontalButtons = function CardHorizontalButtons() {
  return (
    <div className="flex justify-between items-center">
      <button className="flex-1 bg-[#92e9c8] text-black font-extrabold text-2xl py-2 rounded-bl-lg">
        &#x2713;
      </button>
      <button className="flex-1 bg-[#ee5352] text-black font-extrabold text-2xl py-2 rounded-br-lg">
        &#x2715;
      </button>
    </div>
  );
};

