<template>
<div>
  <div class="wrapper">
    <div>第{{n+1}}手</div>
      <div class="chess">
        <div class="row">
        <Cell v-on:click="onClickCell(0, $event)" v-bind:n="n"/>
        <Cell v-on:click="onClickCell(1, $event)" v-bind:n="n"/>
        <Cell v-on:click="onClickCell(2, $event)" v-bind:n="n"/>
      </div>
        <div class="row">
        <Cell v-on:click="onClickCell(3, $event)" v-bind:n="n"/>
        <Cell v-on:click="onClickCell(4, $event)" v-bind:n="n"/>
        <Cell v-on:click="onClickCell(5, $event)" v-bind:n="n"/>
      </div>
        <div class="row">
        <Cell v-on:click="onClickCell(6, $event)" v-bind:n="n"/>
        <Cell v-on:click="onClickCell(7, $event)" v-bind:n="n"/>
        <Cell v-on:click="onClickCell(8, $event)" v-bind:n="n"/>
      </div>
      </div>
    <div>
      战局：{{result == null ? "激战正酣" : `胜利方为${result}`}}
    </div>
    <div  v-if="finished" class="gameOver">游戏结束</div>
  </div>
 
  <!-- <div>
    {{map}}
  </div>
  -->

</div>
</template>

<script>
import Cell from './Cell'
export default{
  components: {
    Cell
  },
  data(){
    return {n:0,map: [
      [null,null,null],
      [null,null,null],
      [null,null,null],
      ],
      result: null,
      finished: false
      }
  },
  methods: {
    onClickCell(i,text){
      console.log(`第${i}个cell被click,内容是${text}`)
      this.map[Math.floor(i/3)][i%3] = text
      this.n += 1
      this.tell()
    },
    // 判断输赢
    tell(cells){
      const map = this.map
      // 横向
      for(let i = 0; i < 3; i++){
        if(map[i][0] != null && map[i][0] == map[i][1] && map[i][1] == map[i][2]){
          this.result = map[i][0]
          this.finished = true
          break
        }
      }
      // 竖向
      for(let j=0; j<3; j++){
        if(map[0][j] != null && map[0][j] == map[1][j] && map[1][j] == map[2][j]){
          this.result = map[0][j]
          this.finished = true
          break
        }
      }
      // 斜向
      if(map[0][0] != null && map[0][0] == map[1][1] && map[1][1] == map[2][2]){
        this.result = map[0][0]
        this.finished = true
          
      }
      if(map[0][2] != null && map[0][2] == map[1][1] && map[1][1] == map[2][0]){
        this.result = map[0][2]
        this.finished = true
        
      }
    }
  }
}
</script>

<style>
.row{
  display: flex;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.gameOver{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    color: white;
}
</style>
