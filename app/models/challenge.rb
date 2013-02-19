class Challenge < ActiveRecord::Base
    attr_accessible :issue_id, :question_ids, :challenger_id, :challenger_score, 
                    :user_id, :user_score, :winner_id, :is_sent, :is_finished

    def self.set_default_challenges(user)
        issues = Array.new

        Issue.all.each do |i|
            if Question.where(issue_id: i.id).length > 3
                issues.push(i)
            end
        end
        issues = issues.shuffle

        (0..2).each do |number|
            questions = Question.where(issue_id: issues[number].id)
            questions = questions.shuffle
            question_ids = ''
            challenger_score = 0

            challenge = Challenge.create(
                challenger_id: 1, 
                issue_id: issues[number].id,
                user_id: user.id,
            )

            (0..3).each do |q|
                answers = Answer.where(question_id: questions[q].id)
                answers = answers.shuffle
                slider = Slider.where(question_id: questions[q].id)[0]
                time = (1 + rand(150)) * 100

                if questions[q].is_slider
                    answer_id = nil
                    time = 0

                    if slider.min % 1 != 0.0 || slider.correct % 1 != 0.0
                        if ((slider.correct % 1) * 10) % 1 == 0.0
                            answer = (((rand * (slider.max - slider.min)) + slider.min) * 10).round / 10.0
                        else
                            answer = (((rand * (slider.max - slider.min)) + slider.min) * 100).round / 100.0
                        end
                    else
                        answer = ((rand * (slider.max - slider.min)) + slider.min).round
                    end

                    if slider.is_exponential
                        score = 100 - ((((slider.correct ** (1.0 / 3)) - (answer ** (1.0 / 3))).abs / ((slider.max ** (1.0 / 3)) - (slider.min ** (1.0 / 3)))) * 100).round
                    else
                        score = 100 - (((answer - slider.correct).abs / (slider.max - slider.min)) * 100).round
                    end
                else
                    answer = nil 
                    answer_id = answers[0].id

                    if answers[0].is_correct
                        score = 100 - (time / 150).round
                    else
                        score = 0
                    end
                end

                Task.create(
                    issue_id: issues[number].id,
                    challenge_id: challenge.id,
                    question_id: questions[q].id,
                    user_id: 1,
                    answer_id: answer_id,
                    answer: answer,
                    score: score,
                    time: time
                )

                challenger_score = challenger_score + score

                if q == 0
                    question_ids = String(questions[q].id)
                else
                    question_ids = question_ids + '/' + String(questions[q].id)
                end
            end

            challenge.challenger_score = challenger_score
            challenge.question_ids = question_ids
            challenge.is_sent = true
            challenge.save      
        end
    end
end
