# CreditCalculator
본전공 복수전공 교과목 이수 구분 변경 시 학점 계산기

구글 시트로 제작

https://docs.google.com/spreadsheets/d/1YmsJqMUHtY6OftTSsqD6cZPA9isKm4duZczV-jBojDU/edit?usp=sharing

위 링크 들어간 후 File > Make a copy 로 복사

이후 사본에서 Extensions > Apps Script > Run 눌러서 권한 부여

구글 Apps Script > Triggers > Add Trigger 들어가서 main, Head, From spreadsheet, On edit, Notify me immediately 로 설정 후 저장하면 작동 시작.

서울여대 종합정보시스템 > 성적 시스템 > 성적 출력 > 전체 성적 조회 를 통해 확인 할 수 있는 전체 성적표를 기반으로 작성.

원래 교과목 이수구분은 졸업 전 가상으로 이루어져 종합정보시스템에서 확인이 불가능하다. 과목의 이수구분에 맞춰서 (전필/전선, 복필/복선, 교필/교선) 전공 란을 작성하고, 교과목 이수구분을 변경하고 싶은 과목은 '2전공으로 넘기기'를 눌러 넘길 수 있다.

또한 교양필수 과목도 확인 할 수 있어 간단하게 졸업 사정을 확인할 수 있다. 정확한 정보는 언제나 종합정보시스템을 확인하기.
