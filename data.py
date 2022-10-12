d={}
d["a"]='//*[@id="wordle-app-game"]/div[2]/div[2]/button[1]'
d['b']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[6]'
d['c']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[4]'
d['d']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[3]'
d['e']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[3]'
d['f']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[4]'
d['g']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[5]'
d['h']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[6]'
d['i']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[8]'
d['j']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[7]'
d['k']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[8]'
d['l']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[9]'
d['m']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[8]'
d['n']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[7]'
d['o']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[9]'
d['p']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[10]'
d['q']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[1]'
d['r']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[4]'
d['s']='//*[@id="wordle-app-game"]/div[2]/div[2]/button[2]'
d['t']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[5]'
d['u']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[7]'
d['v']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[5]'
d['w']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[2]'
d['x']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[3]'
d['y']='//*[@id="wordle-app-game"]/div[2]/div[1]/button[6]'
d['z']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[2]'
d['enter']='//*[@id="wordle-app-game"]/div[2]/div[3]/button[1]'


f=open('words.txt','r')
lines=f.readlines()
for line in range(len(lines)):
    lines[line]=lines[line].replace("\\\n","")
y=lines