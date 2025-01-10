import React from 'react';

// text size는 text-heading-<숫자> or text-body-<large, base, small> text-caption로 정의해주세요!
const Typography = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Typography Example with Pretendard</h1>

            {/* Heading Typography */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Heading Typo: &lt;h1&gt;~&lt;h6&gt;</h2>
                <div className="bg-gray-100 p-6 rounded-md">
                    <h1 className="text-display font-bold">Display-Pretendard 64/Auto</h1>
                    <h1 className="text-heading-1 font-bold">Heading 1-Pretendard 48/Auto</h1>
                    <h2 className="text-heading-2 font-bold">Heading 2-Pretendard 36/Auto</h2>
                    <h3 className="text-heading-3 font-bold">Heading 3-Pretendard 30/Auto</h3>
                    <h4 className="text-heading-4 font-bold">Heading 4-Pretendard 24/Auto</h4>
                    <h5 className="text-heading-5 font-bold">Heading 5-Pretendard 20/Auto</h5>
                    <h6 className="text-heading-6 font-bold">Heading 6-Pretendard 18/Auto</h6>
                </div>
            </section>

            {/* Body Typography */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Body Typo: &lt;p&gt;~&lt;small&gt;</h2>
                <div className="bg-gray-100 p-6 rounded-md">
                    <p className="text-body-large">Body Large-Pretendard 18/140%</p>
                    <p className="text-body-base">Body Base-Pretendard 16/140%</p>
                    <p className="text-body-small">Body Small-Pretendard 14/140%</p>
                </div>
            </section>

            {/* Caption Typography */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Caption Typo: &lt;small&gt;</h2>
                <div className="bg-gray-100 p-6 rounded-md">
                    <small className="text-caption">Caption-Pretendard 12/140%</small>
                </div>
            </section>
        </div>
    );
};

export default Typography;
