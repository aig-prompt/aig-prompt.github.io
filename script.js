let currentSlide = 1;
const totalSlides = 12;

const slides = [
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <div class="flex-grow flex flex-col items-center justify-center px-8">
        <h2 class="text-4xl font-bold text-white mb-16 text-center" style="font-size: 2.5rem;">포스코그룹 임원 WX 워크샵</h2>
        <div class="text-center mb-16">
            <h1 class="text-6xl font-bold text-white mb-8" style="font-size: 3rem;">실습 프롬프트</h1>
            <p class="text-2xl text-white" style="font-size: 1.5rem;">포스코그룹 임원 WX 워크샵을 위한 실습 프롬프트입니다.</p>
        </div>
    </div>
</div>
    `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">비전 + 이미지 생성</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">위 첨부한 로고에 사용된 컬러와 디자인 스타일을 이용해서 20~30대 고객 대상 판촉물을 디자인해줘.<br>
- 제품 구성 : 다이어리, 볼펜, 노트, 지갑, 명합지갑 세트<br>
- 'Tesla' 브랜드명을 제품에 자연스럽게 노출시켜줘<br><br>
- 다음 순서에 맞춰서 진행해<br>
1. 첨부한 로고의 컬러와 디자인 스타일 정리<br>
2. 제품 구성에 어떤 디자인을 할지 정리<br>
3. 이미지 생성<br>
- 설명하는 언어는 한글로 해</p>
                        </div>

                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="위 첨부한 로고에 사용된 컬러와 디자인 스타일을 이용해서 20~30대 고객 대상 판촉물을 디자인해줘.
- 제품 구성 : 다이어리, 볼펜, 노트, 지갑, 명합지갑 세트
- 'Tesla' 브랜드명을 제품에 자연스럽게 노출시켜줘

- 다음 순서에 맞춰서 진행해
1. 첨부한 로고의 컬러와 디자인 스타일 정리
2. 제품 구성에 어떤 디자인을 할지 정리
3. 이미지 생성
- 설명하는 언어는 한글로 해">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6 text-base">
                    <p class="bg-yellow-100 p-3 rounded-lg text-black" style="font-size: 1.25rem;">• 테슬라 로고 이미지는 <span class="font-bold">&lt;세션1&gt;</span> 폴더를 열고 첨부하세요</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">웹브라우징 + 데이터 분석</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-start">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-10 text-lg" style="font-size: 1.25rem;"><strong>#Role :</strong> CFA와 CFP 자격을 가진 재무분석과 투자자문 전문가</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;"><strong>#Task</strong></p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;"><strong>##</strong> 아래 작성하는 모든 자료의 단위는 Billion Dollar를 의미하는 'B'로 표시해</p>
                            <p class="mb-10 text-lg" style="font-size: 1.25rem;"><strong>##</strong> 아래의 순서대로 하나의 과제를 처리하고 다음 과제를 수행해</p>
                            
                            <ol class="list-decimal list-inside space-y-2 text-lg" style="font-size: 1.25rem;">
                                <li>애플의 최근 5년간의 매출액, 당기순이익을 검색해서 표 형식으로 작성해</li>
                                <li>애플의 매출 평균 성장율과 평균 순이익율을 계산하고 향후 3년간의 매출과 순이익을 예측해서 표 형식으로 작성해</li>
                                <li>PER을 30, 35, 40을 적용해서 연도별 시가총액을 예상하고 위 2번 테이블에 3개의 열을 추가해</li>
                                <li>애플의 발행 주식 수를 검색해</li>
                                <li>위 3번의 시가총액에 아래 공식을 적용해서 PER별로 향후 5년의 예상 주가를 파이썬을 이용해 라인 차트로 그려줘</li>
                                <li>애플 잉여 현금 흐름(5개년 동안의 OCF, CAPEX, OCF-CAPEX, 잉여현금흐름율)을 검색하고 표로 작성해.</li>
                            </ol>
                        </div>
                        <div class="ml-4">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="#Role : CFA와 CFP 자격을 가진 재무분석과 투자자문 전문가

#Task
## 아래 작성하는 모든 자료의 단위는 Billion Dollar를 의미하는 'B'로 표시해
## 아래의 순서대로 하나의 과제를 처리하고 다음 과제를 수행해

1. 애플의 최근 5년간의 매출액, 당기순이익을 검색해서 표 형식으로 작성해
2. 애플의 매출 평균 성장율과 평균 순이익율을 계산하고 향후 3년간의 매출과 순이익을 예측해서 표 형식으로 작성해
3. PER을 30, 35, 40을 적용해서 연도별 시가총액을 예상하고 위 2번 테이블에 3개의 열을 추가해
4. 애플의 발행 주식 수를 검색해
5. 위 3번의 시가총액에 아래 공식을 적용해서 PER별로 향후 5년의 예상 주가를 파이썬을 이용해 라인 차트로 그려줘
6. 애플 잉여 현금 흐름(5개년 동안의 OCF, CAPEX, OCF-CAPEX, 잉여현금흐름율)을 검색하고 표로 작성해.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`,
`
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">지속가능보고서 분석</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 파일은 '포스코그룹의 지속 가능 보고서'입니다.<br>
                            나는 [기업명]에서 [역할]을 하는 [직책명]를 맡고 있습니다.<br>
                            나와 관련된 내용에 포커스를 맞춰서 핵심내용을 한글로 요약하세요.<br>
                            리스트 형식으로 쓰세요</p>
                            <div class="bg-gray-100 p-4 rounded-lg mt-2">
                                <p class="font-bold" style="font-size: 1.25rem;">예시)</p>
                                <p style="font-size: 1.25rem;">첨부한 파일은 포스코의 지속 가능 보고서입니다.<br>
                                나는 [포스코 인터내셔널]에서 [해외 사업 개발]을 하는 [사업개발본부장]을 맡고 있습니다.<br>
                                나와 관련된 내용에 포커스를 맞춰서 핵심내용을 한글로 요약하세요. 리스트 형식으로 쓰세요</p>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="첨부한 파일은 '포스코그룹의 지속 가능 보고서'입니다.
나는 [기업명]에서 [역할]을 하는 [직책명]를 맡고 있습니다.
나와 관련된 내용에 포커스를 맞춰서 핵심내용을 한글로 요약하세요.
리스트 형식으로 쓰세요">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">2025년 우리 부서를 위한 핵심과제를 3개 제안하고 그 이유를 설명하세요.</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="2025년 우리 부서를 위한 핵심과제를 3개 제안하고 그 이유를 설명하세요.">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">각 과제별로 액션플랜을 제안하세요.<br>
                            액션 플랜은 최소 3단계에서 최대 10단계로 제안하세요</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="각 과제별로 액션플랜을 제안하세요.
액션 플랜은 최소 3단계에서 최대 10단계로 제안하세요">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6 text-base flex items-center bg-yellow-100 p-3 rounded-lg">
                    <svg class="h-6 w-6 mr-2 text-yellow-600" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    <p class="text-black" style="font-size: 1.25rem;">지속가능보고서 파일은 <span class="font-bold">&lt;세션2&gt;</span> 폴더내의 포스코 홀딩스 ESG 리포트를 이용하세요</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">분기보고서 분석</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">첨부한 파일은 XXX 회사의 '분기 보고서'입니다.<br>
    나는 [기업명]에서 [역할]을 하는 [직책]을 맡고 있습니다.<br>
    분기 보고서를 읽고 우리 부서 관련 핵심 경영개선 이슈를 찾아 요약하세요.<br>
    아래의 표형식으로 쓰세요.</p>
                                <div class="bg-blue-100 p-3 rounded mb-2">
                                    <h3 class="font-bold mb-2 text-xl" style="font-size: 1.5rem;">#형식</h3>
                                    <ul class="list-disc list-inside text-lg" style="font-size: 1.25rem;">
                                        <li>표는 5개의 열로 구성됩니다.</li>
                                        <li>1열부터 번호, 제목, 핵심내용, 중요도(5점 척도 별표시)</li>
                                    </ul>
                                </div>
                            </div>
    
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="첨부한 파일은 XXX 회사의 '분기 보고서'입니다.
    나는 [기업명]에서 [역할]을 하는 [직책]을 맡고 있습니다.
    분기 보고서를 읽고 우리 부서 관련 핵심 경영개선 이슈를 찾아 요약하세요.
    아래의 표형식으로 쓰세요.
    
    #형식
    - 표는 5개의 열로 구성됩니다.
    - 1열부터 번호, 제목, 핵심내용, 중요도(5점 척도 별표시)">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
    
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">위 5개의 이슈를 개선하기 위한 아이디어를 제안하세요.<br>
    내가 번호를 입력하면 해당 번호에 대한 해외 혁신 사례를 검색하고 우리 부서에 적합한 아이디어를 2개씩 제안하세요</p>
                            </div>
    
                            <div class="flex-shrink-0 ml-4 h-full">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="위 5개의 이슈를 개선하기 위한 아이디어를 제안하세요.
    내가 번호를 입력하면 해당 번호에 대한 해외 혁신 사례를 검색하고 우리 부서에 적합한 아이디어를 2개씩 제안하세요">
                                    <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div class="mt-6 text-base">
                        <div class="flex items-center bg-yellow-100 p-3 rounded-lg">
                            <svg class="w-6 h-6 mr-2 text-yellow-600" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <p class="text-black" style="font-size: 1.25rem;">분기 보고서 파일은 자사 회사 홈페이지나 공시자료를 다운로드 받아서 사용해 주세요</p>
                        </div>
                        <div class="flex items-center bg-yellow-100 p-3 rounded-lg mt-2">
                            <svg class="w-6 h-6 mr-2 text-yellow-600" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p class="text-black" style="font-size: 1.25rem;">여의치 않은 경우 <span class="font-bold">&lt;세션2&gt;</span> 폴더내의 포스코 인터내셔널 자료를 이용하셔도 좋습니다</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">경영개선 아이디어로 PPT 생성</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">위 5가지 이슈에 대한 각 2개의 개선 아이디어를 7장의 슬라이드로 만들려고 합니다. 아래의 형식으로 슬라이드 아우트라인을 만드세요</p>
                            <div class="bg-blue-100 p-4 rounded-lg mt-2">
                                <p class="font-bold mb-2" style="font-size: 1.25rem;">#형식</p>
                                <ul class="list-disc list-inside" style="font-size: 1.25rem;">
                                    <li>1페이지 : 제목</li>
                                    <li>2-6페이지 : 각 이슈별 각 2개의 개선 아이디어</li>
                                    <li>7페이지 : 기대효과</li>
                                    <li>8페이지 : 마치는 말</li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="위 5가지 이슈에 대한 각 2개의 개선 아이디어를 7장의 슬라이드로 만들려고 합니다. 아래의 형식으로 슬라이드 아우트라인을 만드세요

#형식
1페이지 : 제목
2-6페이지 : 각 이슈별 각 2개의 개선 아이디어
7페이지 : 기대효과
8페이지 : 마치는 말">
                                <svg class="h-10 w-10 mb-2" style="width: 3rem; height: 3rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
    <div class="bg-blue-600 flex flex-col h-screen">
        <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">탄소 배출 - 데이터 분석 프롬프트</h2>
        <div class="flex-grow overflow-auto">
            <div class="space-y-6 px-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">1</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">이 파일을 읽고 EDA 분석을 진행해. 결과는 한글로 작성해</p>
                            </div>
                            <div class="flex-shrink-0 ml-4">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="이 파일을 읽고 EDA 분석을 진행해. 결과는 한글로 작성해">
                                    <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
    
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">2</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">데이터 셋에서 A기업과 B기업의 연도별 탄소배출량 감소율을 비교해줘.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="데이터 셋에서 A기업과 B기업의 연도별 탄소배출량 감소율을 비교해줘.">
                                    <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
    
                        <div class="flex items-stretch">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl" style="font-size: 1.5rem; width: 3rem; height: 3rem;">3</div>
                            <div class="flex-grow">
                                <p class="mb-2 text-lg" style="font-size: 1.25rem;">위 데이터 분석 결과를 시계열 라인차트로 시각화해줘.</p>
                            </div>
                            <div class="flex-shrink-0 ml-4">
                                <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                        data-copy-text="위 데이터 분석 결과를 시계열 라인차트로 시각화해줘.">
                                    <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    복사하기
                                </button>
                            </div>
                        </div>
                    </div>
    
                    <div class="mt-6 text-base flex items-center bg-yellow-100 p-3 rounded-lg">
                        <svg class="h-6 w-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        <p class="text-black" style="font-size: 1.25rem;"><span class="font-bold" style="font-size: 1.5rem;">&lt;세션3&gt;</span>'KPMG 차트'이미지와 포스코홀딩스 ESG 리포트를 첨부하세요</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
        `
        <div class="bg-blue-600 flex flex-col h-screen">
            <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">복수의 문서 데이터 분석 프롬프트</h2>
            <div class="flex-grow overflow-auto">
                <div class="space-y-6 px-8">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="space-y-6">
                            <div class="flex items-stretch">
                                <div class="flex-grow">
                                    <p class="mb-4 text-lg" style="font-size: 1.25rem;">글로벌 ESG 도전과제를 담은 차트 이미지와 포스코그룹의 ESG 리포트를 읽고 포스코 그룹에서 ESG 프로젝트를 진행할 때 필요한 인사이트를 추출해. 아래의 순서대로 진행해</p>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">1. Image의 내용과 수치를 텍스트로 정리한다</p>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">2. 첨부한 포스코 그룹의 문서내의 ESG 과제 내용과 매핑한다</p>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">3. 매핑된 과제에 대한 점수를 참고해서 포스코에서 우선적으로 고려해야할 과제 리스트를 추출한다.</p>
                                    <p class="mb-2 text-lg" style="font-size: 1.25rem;">4. 정리된 과제 리스트별로 액션플랜을 수립한다.</p>
                                </div>
                                <div class="flex-shrink-0 ml-4 h-full">
                                    <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                            data-copy-text="글로벌 ESG 도전과제를 담은 차트 이미지와 포스코그룹의 ESG 리포트를 읽고 포스코 그룹에서 ESG 프로젝트를 진행할 때 필요한 인사이트를 추출해. 아래의 순서대로 진행해

1. Image의 내용과 수치를 텍스트로 정리한다
2. 첨부한 포스코 그룹의 문서내의 ESG 과제 내용과 매핑한다
3. 매핑된 과제에 대한 점수를 참고해서 포스코에서 우선적으로 고려해야할 과제 리스트를 추출한다.
4. 정리된 과제 리스트별로 액션플랜을 수립한다.">
                                        <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                        복사하기
                                    </button>
                                </div>
                            </div>
                        </div>
        
                        <div class="mt-6 text-base flex items-center bg-yellow-100 p-3 rounded-lg">
                            <svg class="h-6 w-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <p class="text-black" style="font-size: 1.25rem;"><span class="font-bold" style="font-size: 1.5rem;">&lt;세션3&gt;</span>'KPMG 차트'이미지와 포스코홀딩스 ESG 리포트를 첨부하세요</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `,
        
`
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">창의적 문제 해결을 위한 프롬프트 예시</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">• 2030년 포스코 그룹 시총이 애플을 넘어서 전세계 시총 1위가 되었다. 이 순간을 위해 포스코는 2025년 부터...</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="2030년 포스코 그룹 시총이 애플을 넘어서 전세계 시총 1위가 되었다. 이 순간을 위해 포스코는 2025년 부터...">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">• NASA에서 급히 포스코 연구진을 펜타곤으로 초청했다면 나사에서는 포스코에게...</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="NASA에서 급히 포스코 연구진을 펜타곤으로 초청했다면 나사에서는 포스코에게...">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">• 포스코가 넷플릭스와 함께 영화를 제작해 세상을 놀라게 했다. 그 주제는 바로...</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="포스코가 넷플릭스와 함께 영화를 제작해 세상을 놀라게 했다. 그 주제는 바로...">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">• 2025년 포스코가 롤렉스를 인수했다. 2030년에 사람들은 포스코를 이렇게 부르는데...</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="2025년 포스코가 롤렉스를 인수했다. 2030년에 사람들은 포스코를 이렇게 부르는데...">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">GPTs 제작 프롬프트</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-2 text-lg font-bold" style="font-size: 1.5rem;"># Role</p>
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">당신은 기업 분석 전문가입니다.<br>당신은 기업의 재무 정보와 뉴스를 분석하여 기업에 대한 정보를 일목요연하게 정리합니다.</p>
                            
                            <p class="mb-2 text-lg font-bold" style="font-size: 1.5rem;"># Objective</p>
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">사용자가 제시한 기업명에 대한 분석 보고서를 아래의 형식으로 작성해주세요.<br>가독성이 좋은 글머리를 이용하고 구성 요소별 다른 폰트 크기를 적용해 일목요연하게 작성해 주세요.</p>
                            
                            <p class="mb-2 text-lg font-bold" style="font-size: 1.5rem;">1. 회사 개요</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">- 사업 포트폴리오에 대한 상세한 설명<br>- 최근 1년 내 회사 동향 (주요 사건, 신제품 출시 등)</p>
                            
                            <p class="mb-2 text-lg font-bold" style="font-size: 1.5rem;">2. 산업 분석</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">- 시장 환경<br>- 주요 경쟁사 및 시장 위치<br>- 산업 동향 및 전망</p>
                            
                            <p class="mb-2 text-lg font-bold" style="font-size: 1.5rem;">3. 재무 분석</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">- 재무 상태<br>- 실적</p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="# Role
당신은 기업 분석 전문가입니다.
당신은 기업의 재무 정보와 뉴스를 분석하여 기업에 대한 정보를 일목요연하게 정리합니다.

# Objective
사용자가 제시한 기업명에 대한 분석 보고서를 아래의 형식으로 작성해주세요.
가독성이 좋은 글머리를 이용하고 구성 요소별 다른 폰트 크기를 적용해 일목요연하게 작성해 주세요.

1. 회사 개요
- 사업 포트폴리오에 대한 상세한 설명
- 최근 1년 내 회사 동향 (주요 사건, 신제품 출시 등)

2. 산업 분석
- 시장 환경
- 주요 경쟁사 및 시장 위치
- 산업 동향 및 전망

3. 재무 분석
- 재무 상태
- 실적">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">가사 작성을 위한 챗GPT 프롬프트</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-2 text-lg font-bold" style="font-size: 1.5rem;">#역할</p>
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">당신의 역할은 20년차 Kpop 작곡,작사를 하는 싱어송라이터입니다.<br>아래의 정보로 우리 가족의 행복을 기원하는 곡을 만들어 주세요.</p>
                            
                            <p class="mb-2 text-lg font-bold" style="font-size: 1.5rem;">#정보</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">1.아들 이름 : 송시윤</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">2.곡의 주제 : 대학 입학하는 아들을 앞날을 축복하는 아빠</p>
                            <p class="mb-2 text-lg" style="font-size: 1.25rem;">3.곡스타일 : 팝, 발라드</p>
                            
                            <p class="mt-4 text-lg italic bg-yellow-100 p-2 rounded-lg flex items-center" style="font-size: 1.25rem;">
                                <svg class="h-6 w-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                </svg>
                                사랑하는 사람이나 대상의 이름을 넣어 만들어 보세요
                            </p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="#역할
당신의 역할은 20년차 Kpop 작곡,작사를 하는 싱어송라이터입니다.
아래의 정보로 우리 가족의 행복을 기원하는 곡을 만들어 주세요.

#정보
1.아들 이름 : 송시윤
2.곡의 주제 : 대학 입학하는 아들을 앞날을 축복하는 아빠
3.곡스타일 : 팝, 발라드

사랑하는 사람이나 대상의 이름을 넣어 만들어 보세요">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4 text-center mb-8 mt-4" style="font-size: 2.5rem;">Ideogram 예시 프롬프트</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="flex-grow">
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">러브 마크가 장식된 검은 뿔테 안경을 쓰고 눈을 크게 뜬 채 미소 짓는 아빠.</p>
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">섬세하고 선명한 일러스트로 그리세요.</p>
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">이미지 아래에는 흰색과 파란색이 섞인 티셔츠에 노란색에서 주황색, 빨간색으로 바뀌는 생생한 손글씨 글꼴로 "Super Dad"라는 단어가 적혀 있습니다.</p>
                            <p class="mb-4 text-lg" style="font-size: 1.25rem;">전체적인 디자인이 축제 분위기로 가족 모임이나 파티에 잘 어울리게 그려주세요</p>
                            <p class="mt-4 text-lg italic bg-yellow-100 p-2 rounded-lg flex items-center" style="font-size: 1.25rem;">
                                <svg class="h-6 w-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                원하는 영어 단어를 넣어 이미지를 생성해 보세요
                            </p>
                        </div>
                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl" style="font-size: 1.5rem; padding: 1rem 1.5rem;"
                                    data-copy-text="러브 마크가 장식된 검은 뿔테 안경을 쓰고 눈을 크게 뜬 채 미소 짓는 아빠.

섬세하고 선명한 일러스트로 그리세요.

이미지 아래에는 흰색과 파란색이 섞인 티셔츠에 노란색에서 주황색, 빨간색으로 바뀌는 생생한 손글씨 글꼴로 'Super Dad'라는 단어가 적혀 있습니다.

전체적인 디자인이 축제 분위기로 가족 모임이나 파티에 잘 어울리게 그려주세요">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 3rem; height: 3rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
];

// 슬라이드 제목 추출 함수
function extractSlideTitle(slideContent) {
    const titleMatch = slideContent.match(/<h2[^>]*>(.*?)<\/h2>/);
    return titleMatch ? titleMatch[1] : `슬라이드 ${i}`;
}

// 복사 버튼 이벤트 리스너 설정 함수
function setupCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.getAttribute('data-copy-text');
            copyToClipboard(textToCopy, button);
        });
    });
}

// 슬라이드 로드 함수 수정
function loadSlide(slideNumber) {
    console.log(`Loading slide ${slideNumber}`);
    const slideContent = slides[slideNumber - 1]; // 배열은 0부터 시작하므로 1을 빼줍니다
    if (slideContent) {
        // 여기서 제목과 본문의 여백을 늘리고 제목을 가운데 정렬합니다
        const modifiedContent = slideContent.replace(
            /<h2 class="(.*?)"/,
            '<h2 class="$1 text-center mb-8 mt-4"'
        );
        document.getElementById('slide').innerHTML = modifiedContent;
        console.log(`Slide ${slideNumber} content loaded`);
        setupCopyButtons(); // 슬라이드 로드 후 복사 버튼 설정
        updateSlideList(); // 슬라이드 로드 후 목차 업데이트
    } else {
        console.log(`Slide ${slideNumber} not found`);
        document.getElementById('slide').innerHTML = `
            <div class="flex items-center justify-center h-screen">
                <p style="font-size: 1.5rem;">Error: Slide ${slideNumber} not found</p>
            </div>
        `;
    }
}

// 복사 기능 추가
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        // 팝업 생성
        const popup = document.createElement('div');
        popup.innerHTML = `
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span style="font-size: 1.5rem;">복사됨!</span>
        `;
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        `;
        document.body.appendChild(popup);

        // 애니메이션 위한 스타일 추가
        const style = document.createElement('style');
        style.textContent = `
            .checkmark {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: block;
                stroke-width: 2;
                stroke: #fff;
                stroke-miterlimit: 10;
                box-shadow: inset 0px 0px 0px #7ac142;
                animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
            }
            .checkmark__circle {
                stroke-dasharray: 166;
                stroke-dashoffset: 166;
                stroke-width: 2;
                stroke-miterlimit: 10;
                stroke: #7ac142;
                fill: none;
                animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
            }
            .checkmark__check {
                transform-origin: 50% 50%;
                stroke-dasharray: 48;
                stroke-dashoffset: 48;
                animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
            }
            @keyframes stroke {
                100% {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes fill {
                100% {
                    box-shadow: inset 0px 0px 0px 30px #7ac142;
                }
            }
            @keyframes scale {
                0%, 100% {
                    transform: none;
                }
                50% {
                    transform: scale3d(1.1, 1.1, 1);
                }
            }
        `;
        document.head.appendChild(style);

        // 2초 후 팝업 제거
        setTimeout(() => {
            document.body.removeChild(popup);
            document.head.removeChild(style);
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    });
}

// 초기 슬라이드 로드 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, loading initial slide');
    loadSlide(currentSlide);
    updateSlideList(); // 목차 업데이트
    setupCopyButtons(); // 초기 로드 시 복사 버튼 설정
});

// document.getElementById('prevSlide').addEventListener('click', () => {
//     console.log('Previous slide button clicked');
//     if (currentSlide > 1) {
//         currentSlide--;
//         loadSlide(currentSlide);
//     }
// });

// document.getElementById('nextSlide').addEventListener('click', () => {
//     console.log('Next slide button clicked');
//     if (currentSlide < totalSlides) {
//         currentSlide++;
//         loadSlide(currentSlide);
//     }
// });

// 슬라이드 목록 생성 함수 수정
function updateSlideList() {
    const slideList = document.getElementById('slideList');
    slideList.innerHTML = ''; // 기존 목록 초기화
    for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slide-item');
        li.style.fontSize = '1.25rem'; // 목차 항목 폰트 크기 증가
        
        // 현재 슬라이드 강조
        if (i + 1 === currentSlide) {
            li.classList.add('current-slide');
            li.style.backgroundColor = '#e0e7ff'; // 연한 파란색 배경
            li.style.fontWeight = 'bold';
        }
        
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('slide-number');
        numberSpan.textContent = i + 1;
        numberSpan.style.fontSize = '1.5rem'; // 슬라이드 번호 폰트 크기 증가
        
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('slide-title');
        titleSpan.textContent = extractSlideTitle(slides[i]);
        titleSpan.style.fontSize = '1.25rem'; // 슬라이드 제목 폰트 크기 증가
        
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('slide-preview');
        const previewContent = document.createElement('div');
        previewContent.classList.add('slide-preview-content');
        previewContent.innerHTML = slides[i];
        previewContent.style.fontSize = '1rem'; // 미리보기 내용 폰트 크기 증가
        previewDiv.appendChild(previewContent);
        
        li.appendChild(numberSpan);
        li.appendChild(titleSpan);
        li.appendChild(previewDiv);
        
        li.addEventListener('click', () => {
            currentSlide = i + 1;
            loadSlide(currentSlide);
            updateSlideList(); // 목차 업데이트
        });
        slideList.appendChild(li);
    }
}

// 사이드바 기능 등 기존 코드는 그대로 유지...

// 사이드바 토글 기능
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
        document.getElementById('toggleTOC').style.display = 'none';
    } else {
        document.getElementById('toggleTOC').style.display = 'flex';
    }
    document.getElementById('toggleSidebar').style.fontSize = '1.5rem'; // 토글 버튼 폰트 크기 증가
});

// 목차 토글 기능
document.getElementById('toggleTOC').addEventListener('click', () => {
    const slideList = document.getElementById('slideList');
    slideList.classList.toggle('hidden');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.textContent = slideList.classList.contains('hidden') ? '▼' : '▲';
    toggleIcon.style.fontSize = '1.5rem'; // 토글 아이콘 크기 증가
});

// ... (기존 코드 유지)

function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        // 팝업 생성
        const popup = document.createElement('div');
        popup.innerHTML = `
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <span style="font-size: 1.5rem;">복사됨!</span>
        `;
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        `;
        document.body.appendChild(popup);

        // 애니메이션 위한 스타일 추가
        const style = document.createElement('style');
        style.textContent = `
            .checkmark {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: block;
                stroke-width: 2;
                stroke: #fff;
                stroke-miterlimit: 10;
                box-shadow: inset 0px 0px 0px #7ac142;
                animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
            }
            .checkmark__circle {
                stroke-dasharray: 166;
                stroke-dashoffset: 166;
                stroke-width: 2;
                stroke-miterlimit: 10;
                stroke: #7ac142;
                fill: none;
                animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
            }
            .checkmark__check {
                transform-origin: 50% 50%;
                stroke-dasharray: 48;
                stroke-dashoffset: 48;
                animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
            }
            @keyframes stroke {
                100% {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes fill {
                100% {
                    box-shadow: inset 0px 0px 0px 30px #7ac142;
                }
            }
            @keyframes scale {
                0%, 100% {
                    transform: none;
                }
                50% {
                    transform: scale3d(1.1, 1.1, 1);
                }
            }
        `;
        document.head.appendChild(style);

        // 2초 후 팝업 제거
        setTimeout(() => {
            document.body.removeChild(popup);
            document.head.removeChild(style);
        }, 2000);
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    });
}

// 초기 슬라이드 로드 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, loading initial slide');
    loadSlide(currentSlide);
    updateSlideList(); // 목차 업데이트
    setupCopyButtons(); // 초기 로드 시 복사 버튼 설정
});

document.getElementById('prevSlide').addEventListener('click', () => {
    console.log('Previous slide button clicked');
    if (currentSlide > 1) {
        currentSlide--;
        loadSlide(currentSlide);
    }
});

document.getElementById('nextSlide').addEventListener('click', () => {
    console.log('Next slide button clicked');
    if (currentSlide < totalSlides) {
        currentSlide++;
        loadSlide(currentSlide);
    }
});

// 슬라이드 목록 생성 함수 수정
function updateSlideList() {
    const slideList = document.getElementById('slideList');
    slideList.innerHTML = ''; // 기존 목록 초기화
    for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slide-item');
        li.style.fontSize = '1.25rem'; // 목차 항목 폰트 크기 증가
        
        // 현재 슬라이드 강조
        if (i + 1 === currentSlide) {
            li.classList.add('current-slide');
            li.style.backgroundColor = '#e0e7ff'; // 연한 파란색 배경
            li.style.fontWeight = 'bold';
        }
        
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('slide-number');
        numberSpan.textContent = i + 1;
        numberSpan.style.fontSize = '1.5rem'; // 슬라이드 번호 폰트 크기 증가
        
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('slide-title');
        titleSpan.textContent = extractSlideTitle(slides[i]);
        titleSpan.style.fontSize = '1.25rem'; // 슬라이드 제목 폰트 크기 증가
        
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('slide-preview');
        const previewContent = document.createElement('div');
        previewContent.classList.add('slide-preview-content');
        previewContent.innerHTML = slides[i];
        previewContent.style.fontSize = '1rem'; // 미리보기 내용 폰트 크기 증가
        previewDiv.appendChild(previewContent);
        
        li.appendChild(numberSpan);
        li.appendChild(titleSpan);
        li.appendChild(previewDiv);
        
        li.addEventListener('click', () => {
            currentSlide = i + 1;
            loadSlide(currentSlide);
            updateSlideList(); // 목차 업데이트
        });
        slideList.appendChild(li);
    }
}

// 사이드바 기능 등 기존 코드는 그대로 유지...

// 사이드바 토글 기능
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('closed');
    if (sidebar.classList.contains('closed')) {
        document.getElementById('toggleTOC').style.display = 'none';
    } else {
        document.getElementById('toggleTOC').style.display = 'flex';
    }
    document.getElementById('toggleSidebar').style.fontSize = '1.5rem'; // 토글 버튼 폰트 크기 증가
});

// 목차 토글 기능
document.getElementById('toggleTOC').addEventListener('click', () => {
    const slideList = document.getElementById('slideList');
    slideList.classList.toggle('hidden');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.textContent = slideList.classList.contains('hidden') ? '▼' : '▲';
    toggleIcon.style.fontSize = '1.5rem'; // 토글 아이콘 크기 증가
});

// ... (기존 코드 유지)
