// クイズの個数
const quizLength = quiz.length;
// 選択肢ボタンの個数
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
// クイズの目次
let quizIndex = 0;
let score = 0;

// 先生画像・セリフの読み取り
let teacherImg = document.getElementById('js-teacher-img');
let teacherword = document.getElementById('js-teacher-word');
// ワンちゃん画像・セリフの読み取り
let studentImg = document.getElementById('js-student-img');
let studentWord = document.getElementById('js-student-word');


// クイズを出力
const setUpQuiz = () => {
	// 問題の出力
	document.getElementById('js-question').textContent = quiz[quizIndex].question;
	// 選択ボタンの出力
	let buttonIndex = 0;
	while (buttonIndex < buttonLength) {
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
	// キャラクター画像の出力とセリフの変更
	studentImg.setAttribute('src', 'img/dog2_angry.png');
	studentWord.innerHTML = "うーん...どれだろう...";
	teacherword.innerHTML = "がんばって！"
	// ボタンの色
};
setUpQuiz();

// 正誤判定
const correctJudge = (e) => {
	if (quiz[quizIndex].correct === e.target.textContent) {
		// キャラクター画像の変更
		studentImg.setAttribute('src', 'img/dog4_laugh.png');
		// セリフの変更
		studentWord.innerHTML = "わーい！正解！";
		teacherword.innerHTML = "すごい！その調子！"
		score++;
	} else {
		// キャラクター画像の変更
		studentImg.setAttribute('src', 'img/dog3_cry.png');
		// セリフの変更
		studentWord.innerHTML = "残念...！不正解！";
		teacherword.innerHTML = "次の問題は正解しよう！"
	}

	quizIndex++;

	if (quizIndex < quizLength) {
		// 問題が残っている場合実行
		setTimeout(setUpQuiz, 1000);
	} else {
		// 問題がなくなったら実行
		result();
	}
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener('click', (e) => {
		correctJudge(e);
	});
	handlerIndex++;
}

// 結果画面
const result = () =>{
if (score>=7){//7問以上はよくできました
			// キャラクター画像の変更
			studentImg.setAttribute('src', 'img/dog4_laugh.png');
			// セリフの変更
			studentWord.innerHTML = quizLength + '問中、' + score + '問正解したよ！<br>よくできました！';
			teacherword.innerHTML = "おめでとう！"
		}else if(score>=4 && score<7){//4問以上、6問以下は普通
				// キャラクター画像の変更
				studentImg.setAttribute('src', 'img/dog1_smile.png');
				// セリフの変更
				studentWord.innerHTML = quizLength + '問中、' + score + '問正解したよ！<br>次は全問正解目指そうね！';
				teacherword.innerHTML = "よくがんばりました！"
			}else{//3問未満はがんばりましょう
				// キャラクター画像の変更
				studentImg.setAttribute('src', 'img/dog3_cry.png');
				// セリフの変更
				studentWord.innerHTML = quizLength + '問中、' + score + '問正解したよ！<br>君ならもっとできるはず！';
				teacherword.innerHTML = "期待しているよ！"
}};