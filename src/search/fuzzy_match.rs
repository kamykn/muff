use super::word_scoring;

// import from js
extern {
    fn logout(n: i32);
}

pub fn fuzzy_match (mut search_word_list: Vec<word_scoring::WordScoring>, input_word: String) -> Vec<word_scoring::WordScoring> {
    let mut word_scoreing_list: Vec<word_scoring::WordScoring> = Vec::new();

    for mut word_scoring in search_word_list.iter_mut() {
        // let mut debug_str: String = "".to_string();
        let mut next_word_matched_at = 0;
        let mut is_all_match = true;
        let mut add_score: i32 = 1;

        // スコア初期化
        word_scoring.score = 0;

        if word_scoring.word.len() < input_word.len() {
            continue;
        }

        // 文字数が一緒なら == で比較しても良いかオプション化しても良さそう

        // TODO: オプション化
        let mut word_for_search = word_scoring.word.to_lowercase();
        for input_char in input_word.chars() {
            let mut is_found = false;

            let mut index = 0;
            let mut remove_byte_index_start = 0;
            let mut remove_byte_index_end = 0;
            let mut remove_byte_len_last = 0;
            for (i, search_char) in word_for_search.chars().enumerate()  {
                index = i as i32;
                remove_byte_index_start = remove_byte_index_end;
                remove_byte_len_last = search_char.len_utf8();
                remove_byte_index_end = remove_byte_index_start + remove_byte_len_last;
                // TODO スペースが来たら離れたところのほうが加点高くする
                if input_char == search_char && input_char != ' ' {
                    if index == next_word_matched_at {
                        // 連続したMatchには加点
                        add_score = 3;
                    } else if index > next_word_matched_at {
                        // 順番通りのMatchには加点
                        add_score = 2;
                    } else {
                        // 通常加点
                        add_score = 1;
                    }

                    // TODO: 削除 デバッグ用文字列
                    // debug_str = debug_str + " + " + &i.to_string() + ":" + &next_word_matched_at.to_string() + ":" + &add_score.to_string();
                    word_scoring.score = word_scoring.score + add_score;
                    is_found = true;
                    break;
                }
            }

            if !is_found {
                is_all_match = false;
                break;
            }

            // 2重matchをしないように考慮
            word_for_search.drain(remove_byte_index_start..remove_byte_index_end);
            // removeでindexが詰められるので = で束縛しとく
            next_word_matched_at = index;
        }

        if is_all_match {
            // 距離に対する減点
            let len_diff = (word_scoring.word.len() - input_word.len()) as i32;
            word_scoring.score = word_scoring.score - len_diff;

            // TODO: 削除 デバッグ用文字列
            // 加点された履歴が表示される
            // word_scoring.word = word_scoring.word.to_string() + &word_scoring.score.to_string();
            word_scoreing_list.push(word_scoring.clone());
        }
    }

    word_scoreing_list 
}