class Solution(object):
    def matchPlayersAndTrainers(self, players, trainers):
        """
        :type players: List[int]
        :type trainers: List[int]
        :rtype: int
        """
        n = min(len(players), len(trainers))

        players.sort()
        players.reverse()

        trainers.sort()
        trainers.reverse()

        count = 0
        i = 0
        k = 0

        while i < len(players) and k < len(trainers):
            if players[i] <= trainers[k]:
                count += 1
                i += 1
                k += 1
            else:
                i += 1

        return count
        