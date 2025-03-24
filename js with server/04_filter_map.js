let person = [
  { name : "유재석",
    point : 78,
    city : "서울"
  },

  {
    name : "정준하",
    point : 99,
    city : "부산"
  },

  {
    name : "하동훈",
    point : 32,
    city : "강릉"
  },

  {
    name : "김종국",
    point : 82,
    city : "통영"
  }
];

// 1) 점수가 80점 이상 인 사람을 따로 보고싶음
let score = person.filter(p => p.point > 80);
console.log(score);

score[0].name = "강호동";
console.log(person);


// 2) 각 사람들 별로 no를 추가

let personNo = person.map((p, index) => {
                return {
                  no : index + 1,
                  name : p.name,
                  point : p.point,
                  city : p.city
                };
              });
console.log(personNo);

// let pCity = personNo.filter(p => p.city == '서울');
// console.log(pCity);
// pCity[0].name = "이재석";
// console.log(pCity);

let newPerson = [
  { name : "김길동",
    point : 88,
    city : "대구"
  },

  { name : "이김동",
    point : 41,
    city : "구미"
  }
]

