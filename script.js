let currentSlide = 1;
const totalSlides = 4;

const slides = {
    1: `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4">4. 분기보고서 분석</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg">첨부한 파일은 XXX 회사의 '분기 보고서'입니다.<br>
나는 [기업명]에서 [역할]을 하는 [직책]을 맡고 있습니다.<br>
분기 보고서를 읽고 우리 부서 관련 핵심 경영개선 이슈를 찾아 요약하세요.<br>
아래의 표형식으로 쓰세요.</p>
                            <div class="bg-blue-100 p-3 rounded mb-2">
                                <h3 class="font-bold mb-2 text-xl">#형식</h3>
                                <ul class="list-disc list-inside text-lg">
                                    <li>표는 5개의 열로 구성됩니다.</li>
                                    <li>1열부터 번호, 제목, 핵심내용, 중요도(5점 척도 별표시)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl"
                                    data-copy-text="첨부한 파일은 XXX 회사의 '분기 보고서'입니다.
나는 [기업명]에서 [역할]을 하는 [직책]을 맡고 있습니다.
분기 보고서를 읽고 우리 부서 관련 핵심 경영개선 이슈를 찾아 요약하세요.
아래의 표형식으로 쓰세요.

#형식
- 표는 5개의 열로 구성됩니다.
- 1열부터 번호, 제목, 핵심내용, 중요도(5점 척도 별표시)">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg">위 5개의 이슈를 개선하기 위한 아이디어를 제안하세요.<br>
내가 번호를 입력하면 해당 번호에 대한 해외 혁신 사례를 검색하고 우리 부서에 적합한 아이디어를 2개씩 제안하세요</p>
                        </div>

                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl"
                                    data-copy-text="위 5개의 이슈를 개선하기 위한 아이디어를 제안하세요.
내가 번호를 입력하면 해당 번호에 대한 해외 혁신 사례를 검색하고 우리 부서에 적합한 아이디어를 2개씩 제안하세요">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6 text-base">
                    <p>• 분기 보고서 파일은 자사 회사 홈페이지나 공시자료를 다운로드 받아서 사용해 주세요</p>
                    <p>• 여의치 않은 경우 &lt;세션2&gt; 폴더내의 포스코 인터내셔널 자료를 이용하셔도 좋습니다</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    2: `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4">3. 지속가능보고서 분석</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg">첨부한 파일은 '포스코그룹의 지속 가능 보고서'입니다.<br>
나는 [기업명]에서 [역할]을 하는 [직책명]를 맡고 있습니다.<br>
나와 관련된 관련된 내용에 포커스를 맞춰서 핵심내용을 한글로 요약하세요.<br>
리스트 형식으로 쓰세요</p>
                        </div>

                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl"
                                    data-copy-text="첨부한 파일은 '포스코그룹의 지속 가능 보고서'입니다.
나는 [기업명]에서 [역할]을 하는 [직책명]를 맡고 있습니다.
나와 관련된 관련된 내용에 포커스를 맞춰서 핵심내용을 한글로 요약하세요.
리스트 형식으로 쓰세요">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl">2</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg">2025년 우리 부서를 위한 핵심과제를 3개 제안하고 그 이유를 설명하세요.</p>
                        </div>

                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl"
                                    data-copy-text="2025년 우리 부서를 위한 핵심과제를 3개 제안하고 그 이유를 설명하세요.">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl">3</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg">각 과제별로 액션플랜을 제안하세요.<br>
액션 플랜은 최소 3단계에서 최대 10단계로 제안하세요</p>
                        </div>

                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl"
                                    data-copy-text="각 과제별로 액션플랜을 제안하세요.
액션 플랜은 최소 3단계에 최대 10단계로 제안하세요">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6 text-base">
                    <p>• 지속가능보고서 파일은 &lt;세션2&gt; 폴더내의 포스코 홀딩스 ESG 리포트를 이용하세요</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    4: `
<div class="bg-blue-600 flex flex-col h-screen">
    <h2 class="text-4xl font-bold text-white mb-4 px-8 pt-4">5. 분기보고서 분석 및 요약</h2>
    <div class="flex-grow overflow-auto">
        <div class="space-y-6 px-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="space-y-6">
                    <div class="flex items-stretch">
                        <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 self-start text-xl">1</div>
                        <div class="flex-grow">
                            <p class="mb-2 text-lg">첨부한 파일은 XXX 회사의 '분기 보고서'입니다.<br>
나는 [기업명]에서 [역할]을 하는 [직책]을 맡고 있습니다.<br>
분기 보고서를 읽고 우리 부서 관련 핵심 경영개선 이슈를 찾아 요약하세요.<br>
아래의 표형식으로 쓰세요.</p>
                            <div class="bg-blue-100 p-3 rounded mb-2">
                                <h3 class="font-bold mb-2 text-xl">#형식</h3>
                                <ul class="list-disc list-inside text-lg">
                                    <li>표는 5개의 열로 구성됩니다.</li>
                                    <li>1열부터 번호, 제목, 핵심내용, 중요도(5점 척도 별표시)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex-shrink-0 ml-4 h-full">
                            <button class="copy-button px-6 py-4 rounded bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-colors duration-200 ease-in-out flex flex-col items-center justify-center h-full text-xl"
                                    data-copy-text="첨부한 파일은 XXX 회사의 '분기 보고서'입니다.
나는 [기업명]에서 [역할]을 하는 [직책]을 맡고 있습니다.
분기 보고서를 읽고 우리 부서 관련 핵심 경영개선 이슈를 찾아 요약하세요.
아래의 표형식으로 쓰세요.

#형식
- 표는 5개의 열로 구성됩니다.
- 1열부터 번호, 제목, 핵심내용, 중요도(5점 척도 별표시)">
                                <svg class="h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                복사하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
};

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
    const slideContent = slides[slideNumber];
    if (slideContent) {
        document.getElementById('slide').innerHTML = slideContent;
        console.log(`Slide ${slideNumber} content loaded`);
        setupCopyButtons(); // 슬라이드 로드 후 복사 버튼 설정
    } else {
        console.log(`Slide ${slideNumber} not found`);
        document.getElementById('slide').innerHTML = `
            <div class="flex items-center justify-center h-screen">
                <p>Error: Slide ${slideNumber} not found</p>
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
            <span>복사됨!</span>
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

        // 애니메이션을 위한 스타일 추가
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

// 슬라이드 목록 생성
function updateSlideList() {
    const slideList = document.getElementById('slideList');
    slideList.innerHTML = ''; // 기존 목록 초기화
    for (let i = 1; i <= totalSlides; i++) {
        const li = document.createElement('li');
        li.classList.add('slide-item');
        
        const numberSpan = document.createElement('span');
        numberSpan.classList.add('slide-number');
        numberSpan.textContent = i;
        
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('slide-title');
        titleSpan.textContent = extractSlideTitle(slides[i]);
        
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('slide-preview');
        const previewContent = document.createElement('div');
        previewContent.classList.add('slide-preview-content');
        previewContent.innerHTML = slides[i];
        previewDiv.appendChild(previewContent);
        
        li.appendChild(numberSpan);
        li.appendChild(titleSpan);
        li.appendChild(previewDiv);
        
        li.addEventListener('click', () => {
            currentSlide = i;
            loadSlide(currentSlide);
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
});

// 목차 토글 기능
document.getElementById('toggleTOC').addEventListener('click', () => {
    const slideList = document.getElementById('slideList');
    slideList.classList.toggle('hidden');
    const toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.textContent = slideList.classList.contains('hidden') ? '▼' : '▲';
});

// ... (기존 코드 유지)
