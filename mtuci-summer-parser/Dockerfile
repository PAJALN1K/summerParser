FROM alpine:3.17.3

RUN apk update && \
    apk add --update python3 && \
    ln -sf python3 /usr/bin/python && \
    python3 -m ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools

WORKDIR = /app

COPY . .
RUN pip3 install -r requirements.txt

ENV HOSTNAME=0.0.0.0
ENV PORT=5000

EXPOSE $PORT

CMD flask run --host $HOSTNAME --port $PORT
