class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ""
        for s in strs:
            result += str(len(s)) + "#" + s
        return result

    def decode(self, s: str) -> List[str]:
        output = []
        i =0
        while i < len(s):
            j =i
            while s[j] != '#':
                j+=1
            length = int(s[i:j])
            output.append(s[j+1:length + j + 1])
            i = length + j +1
        return output
