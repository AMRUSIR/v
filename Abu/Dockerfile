FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Afx-Abu/Abu-wa-bot /jsl/Abu
WORKDIR /jsl/Abu
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN npm install
CMD ["node", "index.js"]
