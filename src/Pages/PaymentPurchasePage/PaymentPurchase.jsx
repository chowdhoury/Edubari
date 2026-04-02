import React, { useState } from "react";
import PurchaseHero from "./PaymentPurchaseComponents/PurchaseHero";
import PlanSelector from "./PaymentPurchaseComponents/PlanSelector";
import OrderSummary from "./PaymentPurchaseComponents/OrderSummary";
import RegistrationForm from "./PaymentPurchaseComponents/RegistrationForm";

const PaymentPurchase = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <div className="min-h-screen bg-linear-to-b from-primary/30 via-white to-primary/20">
            {/* Hero */}
            <PurchaseHero />

            {/* Plan Selector */}
            <PlanSelector
                selectedPlan={selectedPlan}
                onSelectPlan={setSelectedPlan}
            />

            {/* Order Details Section */}
            <section className="w-full px-4 sm:px-6 md:px-12 py-12 sm:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
                        {/* Registration Form */}
                        <RegistrationForm selectedPlan={selectedPlan} />

                        {/* Order Summary — sticky sidebar */}
                        <div className="lg:sticky lg:top-24">
                            <OrderSummary selectedPlan={selectedPlan} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentPurchase;
