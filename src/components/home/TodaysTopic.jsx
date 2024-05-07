export default function TodaysTopic() {
    return (
      <div className="todays-topic flex flex-col justify-start space-y-9 p-5 fixed bg-transparent border-white border-2">
        <h5 className="text-white text-base font-semibold">Today's Topic</h5>
        <div className="flex flex-col justify-start space-y-7">
            <h1 className="text-white text-pretty w-[275px] text-4xl font-semibold">Does Pineapple belong on pizza?</h1>
            <a href="/take" className="topic-pizza"> 
            <img className="thumbnail-pizza" src="/images/pizza.png" alt="Does Pineapple belong on pizza?" /> 
            </a>
        </div>
      </div>
    );
}