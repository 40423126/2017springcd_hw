var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2017Spring 機械設計工程系網際內容管理 課程倉儲: http://github.com/mdecourse/2017springwcm 課程投影片: http://mdecourse.github.io/2017springwcm 課程網誌: http://mdecourse.github.io/2017springwcm/blog","tags":"misc"},{"url":"./20170618.html","title":"2017/06/18","text":"","tags":"Course"},{"url":"./qi-mo-bao-gao.html","title":"期末報告","text":"★第六組期末網誌： 按此進入 行走機構繪製(Onshape) ??_2017_06_21_17_25_57_968 from 紀鈞瀚 on Vimeo . 期末影片－７ submodule各組員倉儲至第六組，並且在第六組網誌上新增組員望至連結點。 40423126-2017springcd-final-7 from 紀鈞瀚 on Vimeo .","tags":"Course"},{"url":"./20170615di-shi-qi-zhou.html","title":"2017/06/15第十七週","text":"行走機構 2D 靜態繪圖 solve space雙連桿-腳 繪製雙連桿－上集 ??_2017_06_21_23_12_24_972 from 紀鈞瀚 on Vimeo . 繪製雙連桿－下集 ??_2017_06_21_23_24_19_138 from 紀鈞瀚 on Vimeo .","tags":"Course"},{"url":"./20170601di-shi-wu-zhou.html","title":"2017/06/01第十五週","text":"第六組齒輪組合 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } 1 from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 36 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) # 準備在 id=\"gear3\" 的 canvas 中繪圖 canvas = doc[\"gear3\"] ctx = canvas.getContext(\"2d\") # 模數決定齒的尺寸大小, 囓合齒輪組必須有相同的模數與壓力角 # 壓力角 pa 單位為角度 pa = 20 # 第1齒輪齒數 n_g1 = 16 # 第2齒輪齒數 n_g2 = 18 # 第3齒輪齒數 n_g3 = 20 # 第4齒輪齒數 n_g4 = 22 # 第5齒輪齒數 n_g5 = 24 # 第6齒輪齒數 n_g6 = 26 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 m = (0.8*canvas.width)/(n_g1+n_g2+n_g3+n_g4+n_g5) # 根據模數 m, 計算各齒輪的節圓半徑 rp_g1 = m*n_g1/1.5 rp_g2 = m*n_g2/1.5 rp_g3 = m*n_g3/1.5 rp_g4 = m*n_g4/1.5 rp_g5 = m*n_g5/1.5 rp_g6 = m*n_g6/1.5 #單一正齒輪繪圖呼叫格式 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 開始繪製囓合齒輪輪廓 # 繪圖第1齒輪的圓心座標, 因為希望繪圖佔去 canvas.width 的 80%, 所以兩邊各預留 10% 距離 x_g1 = canvas.width*0.9-rp_g1 # y 方向繪圖區域上方預留 canvas.height 的 10% y_g1 = canvas.height*0.1+rp_g1 # 第2齒輪的圓心座標, 假設排列成水平, 表示各齒輪圓心 y 座標相同 x_g2 = x_g1 - rp_g1 - rp_g2 y_g2 = y_g1 # 第3齒輪的圓心座標 x_g3 = x_g1 - rp_g1 - 2*rp_g2 - rp_g3 y_g3 = y_g1 # 第4齒輪的圓心座標 x_g4 = x_g1 - rp_g1 - 2*rp_g2 - 2*rp_g3 - rp_g4 y_g4 = y_g1 # 第5齒輪的圓心座標 x_g5 = x_g1 - rp_g1 - 2*rp_g2 - 2*rp_g3 - rp_g4 y_g5 = y_g1 +rp_g4 +rp_g5 # 第6齒輪的圓心座標 x_g6 = x_g1 - rp_g1 - 2*rp_g2 - 2*rp_g3 - rp_g4 y_g6 = y_g1 +rp_g4 +2*rp_g5 +rp_g6 # 將第1齒輪順時鐘轉 90 度, 也就是 math.pi/2 # 使用 ctx.save() 與 ctx.restore() 以確保各齒輪以相對座標進行旋轉繪圖 ctx.save() # translate to the origin of second gear ctx.translate(x_g1, y_g1) # rotate to engage ctx.rotate(math.pi/2) # put it back ctx.translate(-x_g1, -y_g1) # 繪製第一個齒輪輪廓 Spur(ctx).Gear(x_g1, y_g1, rp_g1, n_g1, pa, \"blue\") ctx.restore() ctx.beginPath() ctx.fillStyle = \"#0000FF\" ctx.font = \"20px ScriptS\" ctx.fillText(\"40423115\",x_g1-20,y_g1) ctx.stroke() # 將第2齒輪逆時鐘轉 90 度之後, 再多轉一齒, 以便與第1齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g2, y_g2) # rotate to engage ctx.rotate(-math.pi/2-math.pi/n_g2) # put it back ctx.translate(-x_g2, -y_g2) Spur(ctx).Gear(x_g2, y_g2, rp_g2, n_g2, pa, \"black\") ctx.restore() ctx.beginPath() ctx.fillStyle = \"#000000\" ctx.font = \"20px ScriptS\" ctx.fillText(\"40423122\",x_g2-20,y_g2) ctx.stroke() # 將第3齒輪逆時鐘轉 90 度之後, 再往回轉第2齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g3, y_g3) # rotate to engage # math.pi+math.pi/n_g2 為第2齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 2 轉動角度, 要轉換到齒輪3 的轉動角度 # 必須乘上兩齒輪齒數的比例, 若齒輪2 大, 則齒輪3 會轉動較快 # 第1個 -math.pi/2 為將原先垂直的第3齒輪定位線逆時鐘旋轉 90 度 # -math.pi/n_g3 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合 # (math.pi+math.pi/n_g2)*n_g2/n_g3 則是第2齒原定位線為順時鐘轉動 90 度, # 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, # 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g2/n_g3 ctx.rotate(-math.pi/2-math.pi/n_g3+(math.pi+math.pi/n_g2)*n_g2/n_g3) # put it back ctx.translate(-x_g3, -y_g3) Spur(ctx).Gear(x_g3, y_g3, rp_g3, n_g3, pa, \"red\") ctx.restore() ctx.beginPath() ctx.fillStyle = \"#FF3333\" ctx.font = \"20px ScriptS\" ctx.fillText(\"40423126\",x_g3-20,y_g3-20) ctx.stroke() # 將第4齒輪逆時鐘轉 90 度之後, 再往回轉第3齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g4, y_g4) # rotate to engage # math.pi+math.pi/n_g3 為第3齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 3 轉動角度, 要轉換到齒輪 4 的轉動角度 # 必須乘上兩齒輪齒數的比例, 若齒輪3 大, 則齒輪4 會轉動較快 # 第1個 -math.pi/2 為將原先垂直的第4齒輪定位線逆時鐘旋轉 90 度 # -math.pi/n_g4 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合 # (math.pi+math.pi/n_g3)*n_g3/n_g4 則是第2齒原定位線為順時鐘轉動 90 度, # 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, # 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g3/n_g4 ctx.rotate(-math.pi/5.5-math.pi/n_g4+(math.pi+math.pi/n_g3)*n_g3/n_g4) # put it back ctx.translate(-x_g4, -y_g4) Spur(ctx).Gear(x_g4, y_g4, rp_g4, n_g4, pa, \"green\") ctx.restore() ctx.beginPath() ctx.fillStyle = \"#008800\" ctx.font = \"20px ScriptS\" ctx.fillText(\"40423135\",x_g4-20,y_g4) ctx.stroke() # 將第5齒輪逆時鐘轉 90 度之後, 再往回轉第4齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g5, y_g5) # rotate to engage # math.pi+math.pi/n_g4 為第3齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 4 轉動角度, 要轉換到齒輪 5 的轉動角度 # 必須乘上兩齒輪齒數的比例, 若齒輪4 大, 則齒輪5 會轉動較快 # 第1個 -math.pi/2 為將原先垂直的第5齒輪定位線逆時鐘旋轉 90 度 # -math.pi/n_g5 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合 # (math.pi+math.pi/n_g4)*n_g4/n_g5 則是第2齒原定位線為順時鐘轉動 90 度, # 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, # 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g4/n_g5 ctx.rotate(-math.pi/3.455-math.pi/n_g5+(math.pi+math.pi/n_g4)*n_g4/n_g5) # put it back ctx.translate(-x_g5, -y_g5) Spur(ctx).Gear(x_g5, y_g5, rp_g5, n_g5, pa, \"goldenrod\") ctx.restore() ctx.beginPath() ctx.fillStyle = \"#DAA520\" ctx.font = \"20px ScriptS\" ctx.fillText(\"40423145\",x_g5-20,y_g5) ctx.stroke() # 將第6齒輪逆時鐘轉 90 度之後, 再往回轉第5齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g6, y_g6) # rotate to engage # math.pi+math.pi/n_g5 為第3齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 4 轉動角度, 要轉換到齒輪 5 的轉動角度 # 必須乘上兩齒輪齒數的比例, 若齒輪4 大, 則齒輪5 會轉動較快 # 第1個 -math.pi/2 為將原先垂直的第5齒輪定位線逆時鐘旋轉 90 度 # -math.pi/n_g6 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合 # (math.pi+math.pi/n_g4)*n_g4/n_g5 則是第2齒原定位線為順時鐘轉動 90 度, # 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, # 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g4/n_g5 ctx.rotate(-math.pi/2.5785-math.pi/n_g6+(math.pi+math.pi/n_g5)*n_g5/n_g6) # put it back ctx.translate(-x_g6, -y_g6) Spur(ctx).Gear(x_g6, y_g6, rp_g6, n_g6, pa, \"pink\") ctx.restore() ctx.beginPath() ctx.fillStyle = \"#FFB7DD\" ctx.font = \"20px ScriptS\" ctx.fillText(\"40423150\",x_g6-20,y_g6) ctx.stroke() 第六組齒輪組合 以下是各組組員零件連結 40423122 - 18t 40423126 - 20t 40423135 - 22t 40423145 - 24t 40423150 - 26t 齒輪配合影片教學 ??_2017_06_21_17_50_37_56 from 紀鈞瀚 on Vimeo .","tags":"Course"},{"url":"./20170518di-shi-san-zhou.html","title":"2017/05/18第十三週","text":"電腦拆裝","tags":"Course"},{"url":"./20170511di-shi-er-zhou.html","title":"2017/05/11第十二週","text":"2D 正齒輪繪圖 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 17 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 以下列出 W11 2B 未出席人數 data = open(\"./../data/w11/2b0503.txt\", encoding=\"utf-8\").read() count = 0 # 去掉前面兩列 student = data.split(\"\\n\")[2:] for i in range(len(student)): each = student[i].split(\"\\t\") if each[1] != \"出席\": count = count + 1 #print(count) div = doc[\"onegear_div\"] div <= \"2b: \" + str(count) + \"/\" + str(len(student)) # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx #ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 cobj = window.Cobj.new creategeartooth = window.createGearTooth.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 17 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = cobj(data, \"SHAPE\", { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = cobj(shapedefs.circle(hr), \"PATH\") shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path cx = canvas.width/2 cy = canvas.height/2 gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 cgo.render(gear)","tags":"Course"},{"url":"./20170511di-shi-er-zhou-part2.html","title":"2017/05/11第十二週(part2)","text":"2D 齒輪組嚙合 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) # 準備在 id=\"gear3\" 的 canvas 中繪圖 canvas = doc[\"gear3\"] ctx = canvas.getContext(\"2d\") # 模數決定齒的尺寸大小, 囓合齒輪組必須有相同的模數與壓力角 # 壓力角 pa 單位為角度 pa = 20 # 第1齒輪齒數 n_g1 = 17 # 第2齒輪齒數 n_g2 = 11 # 第3齒輪齒數 n_g3 = 13 # 第4齒輪齒數 n_g4 = 15 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 m = (0.8*canvas.width)/(n_g1+n_g2+n_g3+n_g4) # 根據模數 m, 計算各齒輪的節圓半徑 rp_g1 = m*n_g1/2 rp_g2 = m*n_g2/2 rp_g3 = m*n_g3/2 rp_g4 = m*n_g4/2 #單一正齒輪繪圖呼叫格式 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") # 開始繪製囓合齒輪輪廓 # 繪圖第1齒輪的圓心座標, 因為希望繪圖佔去 canvas.width 的 80%, 所以兩邊各預留 10% 距離 x_g1 = canvas.width*0.1+rp_g1 # y 方向繪圖區域上方預留 canvas.height 的 10% y_g1 = canvas.height*0.1+rp_g1 # 第2齒輪的圓心座標, 假設排列成水平, 表示各齒輪圓心 y 座標相同 x_g2 = x_g1 + rp_g1 + rp_g2 y_g2 = y_g1 # 第3齒輪的圓心座標 x_g3 = x_g1 + rp_g1 + 2*rp_g2 + rp_g3 y_g3 = y_g1 # 第4齒輪的圓心座標 x_g4 = x_g1 + rp_g1 + 2*rp_g2 + rp_g3 y_g4 = y_g1 + 2.1*rp_g3 # 將第1齒輪順時鐘轉 90 度, 也就是 math.pi/2 # 使用 ctx.save() 與 ctx.restore() 以確保各齒輪以相對座標進行旋轉繪圖 ctx.save() # translate to the origin of second gear ctx.translate(x_g1, y_g1) # rotate to engage ctx.rotate(math.pi/2) # put it back ctx.translate(-x_g1, -y_g1) # 繪製第一個齒輪輪廓 Spur(ctx).Gear(x_g1, y_g1, rp_g1, n_g1, pa, \"blue\") ctx.restore() # 將第2齒輪逆時鐘轉 90 度之後, 再多轉一齒, 以便與第1齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g2, y_g2) # rotate to engage ctx.rotate(-math.pi/2-math.pi/n_g2) # put it back ctx.translate(-x_g2, -y_g2) Spur(ctx).Gear(x_g2, y_g2, rp_g2, n_g2, pa, \"black\") ctx.restore() # 將第3齒輪逆時鐘轉 90 度之後, 再往回轉第2齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g3, y_g3) # rotate to engage # math.pi+math.pi/n_g2 為第2齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 2 轉動角度, 要轉換到齒輪3 的轉動角度 # 必須乘上兩齒輪齒數的比例, 若齒輪2 大, 則齒輪3 會轉動較快 # 第1個 -math.pi/2 為將原先垂直的第3齒輪定位線逆時鐘旋轉 90 度 # -math.pi/n_g3 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合 # (math.pi+math.pi/n_g2)*n_g2/n_g3 則是第2齒原定位線為順時鐘轉動 90 度, # 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, # 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g2/n_g3 ctx.rotate(-math.pi/2-math.pi/n_g3+(math.pi+math.pi/n_g2)*n_g2/n_g3) # put it back ctx.translate(-x_g3, -y_g3) Spur(ctx).Gear(x_g3, y_g3, rp_g3, n_g3, pa, \"red\") ctx.restore() # 將第4齒輪逆時鐘轉 90 度之後, 再往回轉第3齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合 ctx.save() # translate to the origin of second gear ctx.translate(x_g4, y_g4) # rotate to engage # math.pi+math.pi/n_g3 為第3齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 3 轉動角度, 要轉換到齒輪 4 的轉動角度 # 必須乘上兩齒輪齒數的比例, 若齒輪3 大, 則齒輪4 會轉動較快 # 第1個 -math.pi/2 為將原先垂直的第4齒輪定位線逆時鐘旋轉 90 度 # -math.pi/n_g4 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合 # (math.pi+math.pi/n_g3)*n_g3/n_g4 則是第2齒原定位線為順時鐘轉動 90 度, # 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, # 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g3/n_g4 ctx.rotate(-math.pi/2-math.pi/n_g4+(math.pi+math.pi/n_g3)*n_g3/n_g4) # put it back ctx.translate(-x_g4, -y_g4) Spur(ctx).Gear(x_g4, y_g4, rp_g4, n_g4, pa, \"green\") ctx.restore() 分別為(17t-11t-13t-15t)","tags":"Course"},{"url":"./20170427di-shi-zhou.html","title":"2017/04/27第十週","text":"Brython 動態模擬 轉為 Brython 繪圖的模擬應用-機械手臂 window.onload=function(){ // 此地可以透過 github 的 submodule 設定, 分別導入各組員的協同網際程式 brython({debug:1, pythonpath:['./../data/py']}); } from javascript import JSConstructor from browser import window cango2d = JSConstructor(window.Cango2D) shapedefs = window.shapeDefs obj2d = JSConstructor(window.Obj2D) tweener = JSConstructor(window.Tweener) cgo = cango2d(\"robot\") # 清除畫面 cgo.clearCanvas(\"lightyellow\") cgo.setWorldCoords(-50, -50, 300) # 加上基軸與第一桿 # 畫筆移到 -20, -10, 畫直線到 -10,-10 以及 -10,0 standData = ['M', -20,-10, 'L', -10,-10, -10,0, 'A', 10,10,0,0,0,10,0, 'L',10,-10, 20,-10, 20,-40, -20,-40,'z'] stand = obj2d(standData, \"SHAPE\", { \"fillColor\":'darkgray', \"border\": True, \"strokeColor\": \"#222222\" }) axle0 = obj2d(shapedefs.circle(10), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\" }) armGrp = cgo.createGroup2D(stand, axle0) segData = ['M',0,-8, 'A',8,8,0,0,0,0,8, 'L',50,8, 'A',8,8,0,0,0,50,-8, 'Z'] seg1 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) # 利用 zIndex 決定疊層的先後次序 axle1 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle1.translate(50, 0) seg1Grp = cgo.createGroup2D(seg1, axle1) armGrp.addObj(seg1Grp) # 加上第二軸 seg2 = obj2d(segData, \"SHAPE\", { \"fillColor\":'darkGray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": -1 }) axle2 = obj2d(shapedefs.circle(8), \"SHAPE\", { \"fillColor\":'gray', \"border\": True, \"strokeColor\": \"#222222\", \"zIndex\": 1 }) axle2.translate(50, 0) seg2Grp = cgo.createGroup2D(seg2, axle2) cgo.render(seg2Grp) # 請注意 seg2Grp 加上 seg1Grp 物件上 seg1Grp.addObj(seg2Grp) seg3 = obj2d(segData, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) axle3 = obj2d(shapedefs.circle(6), \"SHAPE\", { 'fillColor':'gray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': 1 }) axle3.translate(50, 0) seg3Grp = cgo.createGroup2D(seg3, axle3) seg2Grp.addObj(seg3Grp) seg4Data = ['M',0,-6, 'A',6,6,0,0,0,0,6, 'L',40,6, 40,12, 50,12, 50,-12, 40,-12, 40,-6, 'Z'] seg4 = obj2d(seg4Data, \"SHAPE\", { 'fillColor':'darkGray', 'border': True, 'strokeColor': \"#222222\", 'zIndex': -1 }) seg3Grp.addObj(seg4) # setup animation animData = {'s1': [0, 80, 45, 0], 's2': [0, -60, -60, 0], 's3': [0, -90, 0, 90, 0], 's4': [0, 30, -90, 0]} armTwnr = tweener(0, 3500, 'loop') def initArm(opts): seg2Grp.transform.translate(50,0) seg3Grp.transform.translate(50,0) seg4.transform.translate(50,0) def armPathFn(time, opts): seg1Rot = armTwnr.getVal(time, opts.s1) seg2Rot = armTwnr.getVal(time, opts.s2) seg3Rot = armTwnr.getVal(time, opts.s3) seg4Rot = armTwnr.getVal(time, opts.s4) seg1Grp.transform.rotate(seg1Rot) seg2Grp.transform.rotate(seg2Rot) seg2Grp.transform.translate(50,0) seg3Grp.transform.rotate(seg3Rot) seg3Grp.transform.translate(50,0) seg4.transform.rotate(seg4Rot) seg4.transform.translate(50,0) cgo.animate(armGrp, initArm, armPathFn, animData) cgo.playAnimation()","tags":"Course"},{"url":"./20170420di-jiu-zhou.html","title":"2017/04/20第九週","text":"Brython 程式 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值 上述按鈕取值程式碼: window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值","tags":"Course"},{"url":"./20170413di-ba-zhou.html","title":"2017/04/13第八週","text":"","tags":"Course"},{"url":"./20170406di-qi-zhou.html","title":"2017/04/06第七週","text":"","tags":"Course"},{"url":"./20170330di-liu-zhou.html","title":"2017/03/30第六週","text":"利用Onshape做八連桿組合 心得： 第一次用其他繪圖軟體畫圖及組合，還以為很困難，其實只是要畫很多連桿，找到尺寸後其實沒有太大的困難。 影片教學 八連桿繪製(上集) 錄製_2017_04_15_20_09_16_870 from 紀鈞瀚 on Vimeo . 八連桿繪製(下集) 錄製_2017_04_15_20_27_58_165 from 紀鈞瀚 on Vimeo .","tags":"Course"},{"url":"./20170323di-wu-zhou.html","title":"2017/03/23第五週","text":"利用v-rep設定單連桿運動 利用v-rep設定單連桿運動","tags":"Course"},{"url":"./20170316di-si-zhou.html","title":"2017/03/16第四週","text":"fossil小組共用網址 Fossil SCM 與 Stunnel 啟動整合 心得： 這個網站跟倉儲的網誌不太一樣，它比較方便又能所有成員一起編輯，還省略了很多pyhton的指令，這樣子更能及時紀錄上課時的重點。只不過版面沒有倉儲網誌來得豐富！算是比較可惜一點。 下載 tiny2017 可攜程式系統之後, 可以利用下列 start.bat, 在 Windows 環境中自動擷取電腦連外 IP, 自動設定 stunnel.conf 後, 以 https 協定啟動 Fossil SCM 伺服器. ★第六組網址： 按此進入 ★課程網址： 按此進入 簡單註冊步驟 STEP1: 點開後會進入此介面 STEP2: 右上角login點進去，輸入ID:yen 密碼:ba1add STEP3: 先用此帳號登入，之後點Admin/user辦自己的帳號。 STEP4: 此介面為點選新增用戶後所呈現的畫面。 紅色圈圈→創建ID與密碼 藍色框框→為該使用者能擁有的權限選擇 (只要組長勾選Setup就好) STEP5: 創建完成後，到該介面再次確認是否符合需求。 綠色框框→第六組組員帳號及權限 藍色標示→為組長範例","tags":"Course"},{"url":"./20170309di-san-zhou.html","title":"2017/03/09第三週","text":"小組mission:翻譯影片(英翻中) Hyperworks3 Optistuct's one of our focus area Optistuct是我們的重點領域之一 is nonlinear large deformation analysis and in 2017 we added nonlinear transient analysis the main purpose was to couple Acusolve and structure interaction but also one development that happens during the last year came 是非線性大變形分析，在2017年，我們添加了非線性瞬態分析，其主要目的是耦合Acusolve和結構的相互作用，但也發生在去年發生的一個發展 out these lights and different point releases and it's all really maturing in 2017 is our contact analysis we have different ways of defining large sliding contact and things like that the fast contact analysis for for small 這些燈和不同點的釋放，這一切都在2017年真正成熟是我們的聯繫分析我們有不同的方式來定義大滑動接觸和事情，如快速接觸分析為小 deformation is blazing fast at the very simple idea that makes a solution very fast and that adds to optistruct as really a leading nonlinear structural solver our two major optimization packages are optistruct 變形是快速的，在一個非常簡單的想法，使解決方案非常快，並增加了optistruct作為真正的領先的非線性結構解算器我們的兩個主要優化包是光 for structural optimization as a huge multidisciplinary component tools and hyperstudy for general optimization work on multidisciplinary optimization Optistruct spend a lot of time continuing the 結構優化作為一個巨大的多學科組件工具和hyperstudy對多學科優化的一般優化工作Optistruct花費大量的時間繼續 development for topology optimization and we have the wave topology optimization we kept on working on the manufacturing solution to designed optimization the multimodal optimization is really maturing and we find more and 拓撲優化的開發，我們有波拓撲優化，我們繼續致力於製造解決方案設計優化多模態優化是真正成熟的，我們發現更多， more applications where that help our goal is actually to include all the physics in the optimizations of the team right now is working on optimization for nonlinear problems and so on and then hyperstudy on the other hand is going 更多的應用程序，其中幫助我們的目標是實際上包括所有的物理在團隊的優化現在是工作在非線性問題的優化等等，然後hyperstudy另一方面是 through a new transformation of the user experience or the user experience has changed a few years back but we are now trying to make it much more easy to use by hiding a lot of the advanced functionality to the regular users and 通過用戶體驗的新轉型或用戶體驗已經改變了幾年，但是我們現在正試圖通過隱藏許多高級功能給常規用戶更容易使用， depending on the level of expertise or depending on the job that the user has to do they can customize the user experience he added a few new connection one of them is a flux connection such as the electromagnetic code that we just 取決於專業水平或根據用戶必須做的工作，他們可以定制用戶體驗他添加了一些新的連接，其中一個是通量連接，如電磁代碼，我們只是 acquired for a low frequency electromagnetic we can now take a flux database and put it into hyper study into your study as well 獲得了一個低頻電磁，我們現在可以採取通量數據庫，並把它進入高速研究","tags":"Course"},{"url":"./20170302di-er-zhou.html","title":"2017/03/02第二週","text":"Solve Space完成四連桿 心得： 由於上課來不及畫完，所以回家自己看著老師的影片，在畫一次，邊畫邊理解又可以順便拍影片，不過想說得是solve space真的不好用，指令就那幾個，有時候還會莫名其妙出現紅色，來回弄了好幾遍，經歷百般波折後還是順利上岸了，第一周完成YA~ 用solve space完成四連桿圖 Link1(30CM) Link2(50CM) Link3(60CM) 組合圖","tags":"Course"}]};