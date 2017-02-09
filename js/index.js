var moneyTest = (function(moneyTest){
    var questions = {
        1: {
            question: '13 февраля. Вы только что вспомнили, что завтра День всех влюбленных. Вы знаете, какой подарок хочет ваш любимый или любимая. Но эту вещь уже практически нигде не купить — буквально в паре мест, но с огромной наценкой. Что будете делать?',
            answers: [
                {
                    text: 'Куплю за любые деньги. Это же подарок для любимого человека!',
                    points: 3
                },
                {
                    text: 'Подожду, пока эта вещь снова появится в широкой продаже и куплю через несколько дней. Спешить некуда.',
                    points: 2
                },
                {
                    text: 'День влюбленных? Мы обычно ничего друг другу не дарим в этот день. Не буду покупать.',
                    points: 4
                },
                {
                    text: 'Куплю за любые деньги. Это же подарок для любимого человека!',
                    points: 3
                }
            ]
        },
        2: {
            question: 'Ваш близкий человек, который зарабатывает значительно меньше вас, пригласил вас в ресторан. Вы поужинали и замечательно провели время вместе. Время расплачиваться по счету.',
            answers: [
                {
                    text:'Оплачу счет, а ей/ему разрешу оставить официанту чаевые.',
                    points:2
                },
                {
                    text:'Заплачу за нас обоих. Не позволю ему/ей платить, деньги еще пригодятся.',
                    points:1
                },
                {
                    text:'Оплатим счет поровну, чтобы никто не смущался.',
                    points:3
                },
                {
                    text:'Пусть платит тот, кто пригласил.',
                    points:4
                }

            ]
        },
        3: {
            question: 'Гуляя в центре города, вы спонтанно заглянули в торговый центр — выбираете подарки. Как будете расплачиваться?',
            answers: [
                {
                    text:'Обычной дебетовой картой. Так проще и быстрее. ',
                    points:4
                },
                {
                    text:'Крупные покупки оплачу картой, чтобы кэшбэк был больше. Мелочи возьму за наличку.',
                    points:2
                },
                {
                    text:'Почти всегда плачу наличными.',
                    points:1
                },
                {
                    text:'Наличкой, если ее будет достаточно. Если не хватит — картой.',
                    points:3
                }
            ]
        },
        4: {
            question: 'Вам подарили хороший ноутбук. У вас уже есть ноутбук ничуть не хуже. Как поступите?',
            answers: [
                {
                    text:'Продам на Avito, пока есть возможность.',
                    points:4
                },
                {
                    text:'Подарю маме или еще кому-нибудь из близких, кому он точно необходим.',
                    points:2
                },
                {
                    text:'Поблагодарю и спрячу в глубинах шкафа. Может, пригодится.',
                    points:3
                },
                {
                    text:'Отнесу в детский дом или в благотворительную организацию. Чего добру пропадать!',
                    points:1
                }
            ]
        },
        5: {
            question: 'Вы готовитесь к празднику. Составили список покупок?',
            answers: [
                {
                    text:'Конечно! Все тщательно расписано. А как иначе ходить по магазинам?',
                    points:4
                },
                {
                    text:'Чего? Список? Зачем?',
                    points:1
                },
                {
                    text:'Составлю перед тем, как ехать в магазин. Тогда точно ничего не забуду.',
                    points:2
                },
                {
                    text:'Мне список не нужен, все держу в голове.',
                    points:3
                }
            ]
        }
    };
    var wrapper = document.querySelector('.mt-wrapper');
    var context = null;
    var points = 0;

    function _renderFinal(){
        console.log('final');
    }
    function _renderQuestion(num){
        var tpl = '';
        tpl += '<div class="mt-question_num">' + num + '/' + _countAll() + '</div>';
        tpl += '<div class="mt-question_info">';
        tpl += '<div class="mt-question_info-descr">' + questions[num].question + '</div>';
        tpl += '<div class="mt-question_info-answers">';
        tpl += _appendAnswer(num)
        tpl += '</div>';
        tpl += '</div>';
        wrapper.innerHTML = tpl;
    }
    function _checkNext(current){
        return questions[current+1] ? true : false;
    }
    function _countAll(){
        return Object.keys(questions).length;
    }
    function _appendAnswer(num){
        var ansTpl = '';
        questions[num].answers.map(function(value, index){
            ansTpl += '<div class="mt-question_info-answers-i" onclick="moneyTest.answer(' + num + ',' + index + ');">';
            ansTpl += '<div class="inp-wrap"></div>';
            ansTpl += '<div class="answ-text">' + value.text + '</div>';
            ansTpl += '</div>';
        });
        return ansTpl;

    }
    function _setAnswer(num, index){
        if (_checkNext(num)){
            points += questions[num].answers[index].points;
            _renderQuestion(num+1);
        } else {
            _renderFinal();
        }
        console.log(points, _checkNext(num))
    }

    return {
        init: function(params){
            context = this;
            if (params.questions) questions = params.questions;
            if (params.wrapper) wrapper = document.querySelector(params.wrapper);
            console.log(wrapper);
            _renderQuestion(1);
        },
        answer: _setAnswer
    }

})(moneyTest);