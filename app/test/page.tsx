'use client';
import Card from "@/components/card";

export default function TestPage() {
    return (
        <div>
           <Card 
           prop={{
            name:"John",
            year:"3rd Year",
            id:"4JK23AB110",
            reason:"Home visit",
            startDate:new Date(),
            endDate:new Date()
            }}
        >     
            <Card.Details>
                <Card.UserDescription />
                <Card.UserReason className="flex-grow"/>
                <Card.UserLeaveDate />
            </Card.Details>
            <Card.HorizontalButtons/>
        </Card>
        </div>
    );
}