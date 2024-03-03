function main() {
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();

  var major1Sum = major1SumCheck(activeSheet);
  var major2Sum = major2SumCheck(activeSheet);

  activeSheet.getRange(81, 2).setValue(major1Sum); //본전공
  activeSheet.getRange(82, 2).setValue(major2Sum); //부전공
  
  geCounter(activeSheet);
}

function major2SumCheck(activeSheet) {
  var major2Sum = 0;

  for (var i = 0; i < 74; i++) {

    if (i % 15 == 14) continue; //학년 분류 스킵
    
    //1. 본전공 과목 중 부전공으로 학점 넘기는 것이 있는지 체크
    var checkBoxCell = activeSheet.getRange(i+4, 5).getValue();

    if (checkBoxCell == true)
      if (activeSheet.getRange(i+4, 4).getValue() != "") //String화 방지
        major2Sum += activeSheet.getRange(i+4, 4).getValue(); //부전공 학점에 더하기
    
    //2. 부전공 과목 학점 더하기
    if (activeSheet.getRange(i+4, 7).getValue() != "") //String화 방지
      major2Sum += activeSheet.getRange(i+4, 7).getValue();


  }
  return major2Sum; //부전공 학점 값을 return
}


function major1SumCheck(activeSheet) { //본전공 학점 계산
  var major1Sum = 0;

  for (var i = 0; i < 74; i++) {

    if (i % 15 == 14) continue; //학년 분류 스킵

    //부전공으로 학점 넘기는지에 대한 TF여부 판단
    var checkBoxCell = activeSheet.getRange(i+4, 5).getValue();

    if (checkBoxCell == true) continue; //학점을 넘긴다면 일단 패스
    else //학점을 넘기지 않는다면
      if (activeSheet.getRange(i+4, 4).getValue() != "") //String화 방지
        major1Sum += activeSheet.getRange(i+4, 4).getValue(); //본전공 학점에 더하기
  }
  return major1Sum; //본전공 학점 값을 return
}

function geCounter(activeSheet) { //교양 카운터
  var chapelCounter = 0; //경건회
  activeSheet.getRange(81, 5).setValue(chapelCounter);
  var baromTF = activeSheet.getRange(81, 6); //바롬
  baromTF.setValue("미수강");
  var bjsTF = activeSheet.getRange(81, 7); //바종설
  bjsTF.setValue("미수강");

  var engTF = activeSheet.getRange(83, 5); //대학영어 
  engTF.setValue("미수강");
  var ggrTF = activeSheet.getRange(83, 6); //기개론 
  ggrTF.setValue("미수강");
  var swTF = activeSheet.getRange(83, 7); //소창 
  swTF.setValue("미수강");

  var writeTF = activeSheet.getRange(83, 8); //글쓰기 
  writeTF.setValue("미수강");

  var ge24_1 = activeSheet.getRange(85, 5); //인문과학
  ge24_1.setValue("미수강"); 
  var ge24_2 = activeSheet.getRange(85, 6); //사회과학 
  ge24_2.setValue("미수강"); 
  var ge24_3 = activeSheet.getRange(85, 7); //과학기술 
  ge24_3.setValue("미수강"); 
  var ge24_4 = activeSheet.getRange(85, 8); //문화예술 
  ge24_4.setValue("미수강"); 

  var ge_1 = activeSheet.getRange(87, 5); //윤리와인간 
  ge_1.setValue("미수강"); 
  var ge_2 = activeSheet.getRange(87, 6); //역사와문화 
  ge_2.setValue("미수강"); 
  var ge_3 = activeSheet.getRange(87, 7); //가치와사회 
  ge_3.setValue("미수강"); 
  var ge_4 = activeSheet.getRange(87, 8); //기술과미래 
  ge_4.setValue("미수강"); 
  var ge_5 = activeSheet.getRange(87, 9); //표현과예술 
  ge_5.setValue("미수강"); 
 
  for (var i = 0; i < 74; i++) {
    if (i % 15 == 14) continue; //학년 분류 스킵

    //부전공으로 학점 넘기는지에 대한 TF여부 판단
    var checkBoxCell = activeSheet.getRange(i+4, 10).getValue();

      if (checkBoxCell != "") { //비어있는 칸이 아니라면
        switch(checkBoxCell) {
          case "경건회" :
            chapelCounter++;
            break;
          case "바롬" :
            baromTF.setValue("수강완료");
            break;
          case "바종설" :
            bjsTF.setValue("수강완료");
            break;
          case "대학영어" :
            engTF.setValue("수강완료");
            break;
          case "기개론" :
            ggrTF.setValue("수강완료");
            break;
          case "소창" :
            swTF.setValue("수강완료");
            break;
          case "글쓰기" :
            writeTF.setValue("수강완료");
            break;
          case "인문과학" :
            ge24_1.setValue("수강완료");
            break;
          case "사회과학" :
            ge24_2.setValue("수강완료");
            break;
          case "과학기술" :
            ge24_3.setValue("수강완료");
            break;
          case "문화예술" :
            ge24_4.setValue("수강완료");
            break;
          case "윤리와인간" :
            ge_1.setValue("수강완료");
            break;
          case "역사와문화" :
            ge_2.setValue("수강완료");
            break;
          case "가치와사회" :
            ge_3.setValue("수강완료");
            break;
          case "기술과미래" :
            ge_4.setValue("수강완료");
            break;
          case "표현과예술" :
            ge_5.setValue("수강완료");
            break;

        }
      }
  }

  activeSheet.getRange(81, 5).setValue(chapelCounter); //경건회 반영


}
