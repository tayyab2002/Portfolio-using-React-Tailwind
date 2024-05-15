const Lazyloader = () => {
    return (
        <div className='Loader'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style={{
                    margin: 'auto', background: 'rgba(241, 242, 243, 0)', display: 'block', shapeRendering: 'auto'
                }} width="264px" height="264px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <rect x="19.5" y="29" width="11" height="42" fill="#93dbe9">
                        <animate attributeName="y" repeatCount="indefinite" dur="1.2048192771084336s" calcMode="spline" keyTimes="0;0.5;1" values="12.199999999999996;29;29" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.24096385542168675s"></animate>
                        <animate attributeName="height" repeatCount="indefinite" dur="1.2048192771084336s" calcMode="spline" keyTimes="0;0.5;1" values="75.60000000000001;42;42" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.24096385542168675s"></animate>
                    </rect>
                    <rect x="44.5" y="29" width="11" height="42" fill="#689cc5">
                        <animate attributeName="y" repeatCount="indefinite" dur="1.2048192771084336s" calcMode="spline" keyTimes="0;0.5;1" values="16.4;29;29" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.12048192771084337s"></animate>
                        <animate attributeName="height" repeatCount="indefinite" dur="1.2048192771084336s" calcMode="spline" keyTimes="0;0.5;1" values="67.2;42;42" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.12048192771084337s"></animate>
                    </rect>
                    <rect x="69.5" y="29" width="11" height="42" fill="#5e6fa3">
                        <animate attributeName="y" repeatCount="indefinite" dur="1.2048192771084336s" calcMode="spline" keyTimes="0;0.5;1" values="16.4;29;29" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                        <animate attributeName="height" repeatCount="indefinite" dur="1.2048192771084336s" calcMode="spline" keyTimes="0;0.5;1" values="67.2;42;42" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                    </rect>
                </svg>
            </div>
        </div>
    )
}

export default Lazyloader;
