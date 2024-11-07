export default function Hero(){
    return(
        <section className=" container py-12">
            <h1 className="text-4xl font-bold text-center">
                Find your next <br/> dream Job
            </h1>
            {/*<p className="text-center text-gray-800 mt-2">*/}
                {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe suscipit expedita natus unde provident adipisci, est maxime perspiciatis quae eaque. Consequuntur recusandae, assumenda sit vel dicta facere cumque doloribus in.*/}
            {/*</p>*/}
            <form className="flex gap-2 mt-4 max-w-md mx-auto">
                <input type="search" className="border border-gray-400 w-full py-2 px-3 rounded-md" placeholder="Search pharse"/>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Search
                </button>
            </form>
        </section>
    );
}