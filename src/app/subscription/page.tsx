import React from 'react';

function Subscription() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-[90px]">
                <div className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-white/20">
                    <p className="text-2xl font-bold text-white">Basic</p>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-400">Perfect for individuals getting started. Essential features for everyday use.</p>
                    <div className="mt-6">
                        <span className="text-4xl font-bold text-white">$10</span>
                        <span className="ml-2 text-sm text-zinc-500">per month</span>
                    </div>
                    <div className="mt-8 space-y-4 text-sm text-zinc-300">
                        <p>✓ Basic features</p>
                        <p>✓ Limited access</p>
                        <p>✓ Standard support</p>
                        <p>✓ 5 projects</p>
                        <p>✓ Monthly updates</p>
                    </div>
                    <button className="cursor-pointer mt-8 w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600">Get Basic</button>
                </div>
                <div className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-white/20">
                    <p className="text-2xl font-bold text-white">Pro</p>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-400">Great for users who need more flexibility and advanced features.</p>
                    <div className="mt-6">
                        <span className="text-4xl font-bold text-white">$20</span>
                        <span className="ml-2 text-sm text-zinc-500">per month</span>
                    </div>
                    <div className="mt-8 space-y-4 text-sm text-zinc-300">
                        <p>✓ Advanced features</p>
                        <p>✓ Priority support</p>
                        <p>✓ Standard support</p>
                        <p>✓ 25 projects</p>
                        <p>✓ Frequent updates</p>
                    </div>
                    <button className="cursor-pointer mt-8 w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600">Get Pro</button>
                </div>
                <div className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-white/20">
                    <p className="text-2xl font-bold text-white">Premium</p>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-400">Best for users who want the full experience with maximum flexibility.</p>
                    <div className="mt-6">
                        <span className="text-4xl font-bold text-white">$30</span>
                        <span className="ml-2 text-sm text-zinc-500">per month</span>
                    </div>
                    <div className="mt-8 space-y-4 text-sm text-zinc-300">
                        <p>✓ Unlimited projects</p>
                        <p>✓ All features included</p>
                        <p>✓ Premium support</p>
                        <p>✓ Unlimited users</p>
                        <p>✓ Exclusive updates</p>
                    </div>
                    <button className="cursor-pointer mt-8 w-full rounded-xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600">Get Premium</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription;