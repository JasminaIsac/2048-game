export default function Button({text, onClick}) {
    return (
        <button className="bg-[#8f7a66] px-8 text-[#f9f6f2] py-2 rounded-lg" onClick={onClick}>{text}</button>
    )
}