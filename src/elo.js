export function run(initialRanking, allScores, config) {
  return allScores.reduce((currRanking, currScore) => {
    const results = scoreToResults(currScore)
    return processRankingWithResults(currRanking, results, config)
  }, initialRanking)
}

function scoreToResults(score) {
  if (isNaN(score[1]) || isNaN(score[2])) {
    throw new Error(`${score} scores are not correctly formatted`)
  }
  score[1] = parseInt(score[1], 10)
  score[2] = parseInt(score[2], 10)
  if (typeof score[0] !== "string" || typeof score[3] !== "string") {
    throw new Error(`${score} players are not correctly formatted`)
  }
  if (score[1] === score[2]) {
    return [
      createResult(score[0], score[3], 0.5),
      createResult(score[3], score[0], 0.5),
    ]
  }
  else if (score[1] > score[2]) {
    return [
      createResult(score[0], score[3], 1),
      createResult(score[3], score[0], 0),
    ]
  }
  else if (score[1] < score[2]) {
    return [
      createResult(score[0], score[3], 0),
      createResult(score[3], score[0], 1),
    ]
  }
  throw new Error("can't compare scores")
}

function createResult(ourName, theirName, ourResult) {
  return { ourName, theirName, ourResult }
}

function processRankingWithResults(ranking, resultPair, config) {
  const newRankings = resultPair.map((result) => {
    const ourRanking = ranking[result.ourName] || config.defaultRanking
    const theirRanking = ranking[result.theirName] || config.defaultRanking
    return {
      [result.ourName]: ourRanking + calcOurRatingDelta(
        ourRanking,
        theirRanking,
        result.ourResult,
        config.kfactors
      )
    }
  })
  return Object.assign({}, ranking, ...newRankings)
}

function calcOurRatingDelta(ourRating, theirRating, ourResult, kfactors) {
  if ([0, 0.5, 1].indexOf(ourResult) === -1) {
    throw new Error("not a valid result")
  }
  const ourChance = calcOurChanceToWin(ourRating, theirRating)
  return Math.round(kfactors[ourResult] * (ourResult - ourChance))
}

function calcOurChanceToWin(ourRating, theirRating) {
  return 1 / ( 1 + Math.pow(10, (theirRating - ourRating) / 400) );
}
