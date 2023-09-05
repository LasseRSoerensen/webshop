
function Header() {

    return (
        <div className=" bg-[#7973d4] p-2">
            <div className="flex justify-between">
                <button>HOME</button>
                <div className="text-3xl font-extralight font italic">GlobeGoods</div>
                <button className="max-w-[40px] flex">
                    <div><img src={"./src/trolley.png"}></img></div>
                    <div className="self-end text-md">1</div>
                </button>
            </div>
        </div>);
}

export default Header;