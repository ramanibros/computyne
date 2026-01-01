import FunfactSingleMod3 from "@/components/shared/funfact/FunfactSingleMod3";

const Counter = () => {
    return (
        <div
            className={`tj-client-section-4 mb-0    section-gap-x wow fadeInUp`}
            data-wow-delay=".4s"
        >
            <div className="container-fluid client-container">
                <div className="row">
                    <div className="col-12">
                        <div className="countup-wrap">
                            <div className="countup-item-mod">
                                <FunfactSingleMod3 currentValue={15} symbol={"+"}/>

                                <span className="count-text-mod-2">Years of Experience</span>
                                <span
                                    className="count-separator"
                                    style={{
                                        backgroundImage: "url('/images/shape/separator.svg')",
                                    }}
                                ></span>
                            </div>
                            <div className="countup-item-mod">
                                <FunfactSingleMod3 currentValue={250} symbol={"+"}/>
                                <span className="count-text-mod-2">Empowered Employees</span>
                                <span
                                    className="count-separator"
                                    style={{
                                        backgroundImage: "url('/images/shape/separator.svg')",
                                    }}
                                ></span>
                            </div>
                            <div className="countup-item-mod">
                                <FunfactSingleMod3 currentValue={50} symbol={"M"}/>
                                <span className="count-text-mod-2">Data Collected Annually</span>
                                <span
                                    className="count-separator"
                                    style={{
                                        backgroundImage: "url('/images/shape/separator.svg')",
                                    }}
                                ></span>
                            </div>
                            <div className="countup-item-mod">
                                <FunfactSingleMod3 currentValue={50} symbol={"%"}/>
                                <span className="count-text-mod-2">Cost Saving</span>
                                <span
                                    className="count-separator"
                                    style={{
                                        backgroundImage: "url('/images/shape/separator.svg')",
                                    }}
                                ></span>
                            </div>
                            <div className="countup-item-mod">
                                <FunfactSingleMod3 currentValue={24} symbol={"x7"}/>
                                <span className="count-text-mod-2">Data Support</span>
                                <span
                                    className="count-separator"
                                    style={{
                                        backgroundImage: "url('/images/shape/separator.svg')",
                                    }}
                                ></span>
                            </div>
                            <div className="countup-item-mod">
                                <FunfactSingleMod3 currentValue={99.99} symbol={"%"}/>
                                <span className="count-text-mod-2">Accuracy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
