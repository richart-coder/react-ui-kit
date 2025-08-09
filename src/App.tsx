import React, { useState, useEffect } from "react";
import "./App.css";
import { ChevronsUpDown } from "lucide-react";
import Button from "./components/Button";
import Spinner from "./components/Spinner";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./components/ui/collapsible";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./components/ui/accordion";

export function CollapsibleDemo() {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<div className="collapsible-container">
			<Collapsible
				open={isOpen}
				onOpenChange={setIsOpen}
				className="flex flex-col gap-2"
			>
				<div className="collapsible-header flex items-center justify-between">
					<h4 className="collapsible-title">📚 我的收藏庫</h4>
					<CollapsibleTrigger asChild>
						<button className={`collapsible-trigger ${isOpen ? "open" : ""}`}>
							<ChevronsUpDown />
							<span className="sr-only">Toggle</span>
						</button>
					</CollapsibleTrigger>
				</div>

				<div className="collapsible-item">
					<span className="font-mono text-sm">@radix-ui/primitives</span>
				</div>

				<CollapsibleContent className="collapsible-content">
					<div className="collapsible-item">
						<span className="font-mono text-sm">@radix-ui/colors</span>
					</div>
					<div className="collapsible-item">
						<span className="font-mono text-sm">@stitches/react</span>
					</div>
					<div className="collapsible-item">
						<span className="font-mono text-sm">@radix-ui/themes</span>
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}

function AccordionDemo() {
	return (
		<Accordion className="accordion" defaultValue="item-1">
			<AccordionItem className="accordion-item" value="item-1">
				<AccordionTrigger>Product Information</AccordionTrigger>
				<AccordionContent>
					<div className="accordion-content">
						<p>
							Our flagship product combines cutting-edge technology with sleek
							design. Built with premium materials, it offers unparalleled
							performance and reliability.
						</p>
						<p>
							Key features include advanced processing capabilities, and an
							intuitive user interface designed for both beginners and experts.
						</p>
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem className="accordion-item" value="item-2">
				<AccordionTrigger>Shipping Details</AccordionTrigger>
				<AccordionContent>
					<div className="accordion-content">
						<p>
							We offer worldwide shipping through trusted courier partners.
							Standard delivery takes 3-5 business days, while express shipping
							ensures delivery within 1-2 business days.
						</p>
						<p>
							All orders are carefully packaged and fully insured. Track your
							shipment in real-time through our dedicated tracking portal.
						</p>
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem className="accordion-item" value="item-3">
				<AccordionTrigger>Return Policy</AccordionTrigger>
				<AccordionContent>
					<div className="accordion-content">
						<p>
							We stand behind our products with a comprehensive 30-day return
							policy. If you&apos;re not completely satisfied, simply return the
							item in its original condition.
						</p>
						<p>
							Our hassle-free return process includes free return shipping and
							full refunds processed within 48 hours of receiving the returned
							item.
						</p>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

function App() {
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		const timerId = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			clearTimeout(timerId);
		};
	});
	return (
		<div className="app">
			<Button
				className="primary-btn"
				onClick={() => setLoading(true)}
				disabled={isLoading}
			>
				{isLoading && <Spinner size="md" color="#fff" />}
				{isLoading ? "處理中..." : "通知"}
			</Button>
		</div>
	);
}

export default App;
