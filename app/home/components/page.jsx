'use client';

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";

export default function Page() {
    return (
        <main className="flex flex-col p-3 gap-2">
            <Section text="Button">
                <Button
                    text="Save"
                    handleClick={() => {}}
                    color="blue"
                />
                <Button
                    text="Cancel"
                    handleClick={() => {}}
                    color="gray"
                />
                <Button
                    text="Delete"
                    handleClick={() => {}}
                    color="red"
                />
                <Button
                    text="Add"
                    handleClick={() => {}}
                    color="green"
                />
            </Section>
            <Section text="Input">
                <Input 
                    label="Username"
                    handleChange={e => console.log(e.target.value)}
                    placeholder="hoductrung"
                    icon="user"
                />
                <Input 
                    label="Password"
                    handleChange={e => console.log(e.target.value)}
                    placeholder="Type your password here"
                    type="password"
                    icon="key"
                />
            </Section>
            <Section text="Select Option">
                <Select 
                    text="Select room type:"
                    handleChange={e => console.log(e.target.value)}
                    dataSet={[
                        {id: 1, text: "VIP room", value: "vip"},
                        {id: 2, text: "PRO", value: "pro"},
                        {id: 3, text: "Premium", value: "premium"},
                        {id: 4, text: "Standard room", value: "standard"},
                    ]}    
                /> 
            </Section>
        </main>
    )
}

function Section({
    text,
    children,
}) {
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{text}</h2>
            <div className="flex gap-2">
            {children}
            </div>
        </section>
    )
}