// 8 IN1 LEDS wire red
// 9  IN2 LEDS wire yellow
// 10 IN3 LEDS wire orange
// 11 IN4 LEDS wire green
// 12 TRLG SENSOR
// 13 ECHO SENSOR
// GND PLACA GND SENSOR
// VCC +5V DEL SENSOR AL MOTOR 
// 7  IN4 MOTOR
// 6 ENB MOTOR
// 5 ENA MOTOR
// 4 IN2 MOTOR
// 3 IN1 MOTOR
// 2 IN3 MOTOR
// GND MOTOR GND PLACA
// +12V VIN PLACA 
// +5V PLACA VCC LEDS
// GND PLACA GND LEDS
//

// Include the string library
#include <Servo.h>

Servo servoMotor;

int in1led = 8;// 8 IN1 LEDS
int in2led = 9;// 9  IN2 LEDS
int in3led = 10;// 10 IN3 LEDS
int in4led = 11;// 11 IN4 LEDS

int trigsensor = 12;// 12 TRIG SENSOR
int echosensor = 13;// 13 ECHO SENSOR

int in4motor = 7;// 7  IN4 MOTOR
int enbmotor = 6;// 6 ENB MOTOR
int enamotor = 5;// 5 ENA MOTOR
int in2motor = 4;// 4 IN2 MOTOR
int in1motor = 3;// 3 IN1 MOTOR
int in3motor = 2;// 2 IN3 MOTOR

int velocidadCoche = 100;
float distancia = 0.0;
int estado = 'g';
bool revisando = false;
float tdst[2][3]; // [fila][columna]



// Para hacer prints en consola Serial.printIn(string o variable)

void setup() {
    Serial.begin(9600);

    servoMotor.attach(8);

    // El trig del sensor se utiliza para enviar señal al sensor para que 
    // que nos envie una señal de la distancia
    pinMode(trigsensor, OUTPUT);
    // Recibimos respuesta de la distancia del sensor
    pinMode(echosensor, INPUT);
    // Ponemos todos las conexiones al motor en OUTPUT ya que no queremos 
    // recibir ninguna señal del motor
    pinMode(in4motor, OUTPUT);
    pinMode(enbmotor, OUTPUT);
    pinMode(enamotor, OUTPUT);
    pinMode(in2motor, OUTPUT);
    pinMode(in1motor, OUTPUT);
    pinMode(in3motor, OUTPUT);

    // Leds
    pinMode(in1led, OUTPUT);
    pinMode(in2led, OUTPUT);
    pinMode(in3led, OUTPUT);
    pinMode(in4led, OUTPUT);
}

void derecha() {
    // Ponemos potencia de los motores
    analogWrite(enamotor, velocidadCoche);
    analogWrite(enbmotor, velocidadCoche);

    // hacemos que vaya hacia delante
    digitalWrite(in1motor, LOW);
    digitalWrite(in2motor, HIGH);
    digitalWrite(in3motor, HIGH);
    digitalWrite(in4motor, LOW);
}

void izquierda() {
    // Ponemos potencia de los motores
    analogWrite(enamotor, velocidadCoche);
    analogWrite(enbmotor, velocidadCoche);

    // hacemos que vaya hacia atras
    digitalWrite(in1motor, HIGH);
    digitalWrite(in2motor, LOW);
    digitalWrite(in3motor, LOW);
    digitalWrite(in4motor, HIGH);
}

void delante() {
    // Ponemos potencia de los motores
    analogWrite(enamotor, velocidadCoche);
    analogWrite(enbmotor, velocidadCoche);

    // hacemos que vaya hacia delante
    digitalWrite(in1motor, HIGH);
    digitalWrite(in2motor, LOW);
    digitalWrite(in3motor, HIGH);
    digitalWrite(in4motor, LOW);
}

void atras() {
    // Ponemos potencia de los motores
    analogWrite(enamotor, velocidadCoche);
    analogWrite(enbmotor, velocidadCoche);

    // hacemos que vaya hacia delante
    digitalWrite(in1motor, LOW);
    digitalWrite(in2motor, HIGH);
    digitalWrite(in3motor, LOW);
    digitalWrite(in4motor, HIGH);
}

void parar() {
    // Ponemos potencia de los motores
    analogWrite(enamotor, LOW);
    analogWrite(enbmotor, LOW);

    // hacemos que vaya hacia atras
    digitalWrite(in1motor, LOW);
    digitalWrite(in2motor, LOW);
    digitalWrite(in3motor, LOW);
    digitalWrite(in4motor, LOW);

    Serial.println("PARAMOS");
}

void GetDistance() {
    // Enviamos una señal debil al Trig para que no detecte que le estemos pidiendo nada
    digitalWrite(trigsensor, LOW);
    // Esperamos 2 microsegundos
    delayMicroseconds(2);
    // Enviamos una señar alta al Trig para pedir
    digitalWrite(trigsensor, HIGH);
    // Esperamos 10 microsegundos
    delayMicroseconds(10);
    // Enviamos otra señal debil al Trig para que no vuelva a detectar que le estamos pidiendo
    digitalWrite(trigsensor, LOW);
    // Seteamos la variable de distancia para poder cogerla en el loop
    distancia = pulseIn(echosensor, HIGH);
    // return distancia;
}

// Funcion de inicio
void func_1() {
// void loop() {
    // Parece que gira hacia la derecha xd
    velocidadCoche = 200;
    derecha();
    delay(3000);
    parar();

    delay(1000);
    izquierda();
    delay(3000);
    parar();

    velocidadCoche = 150;
    delay(5000);
    delante();
    delay(3000);
    parar();

    delay(1000);
    atras();
    delay(3000);
    parar();
    delay(10000);
}

// El del mando
void func_2() {
    // Lo que se supone que va por bluethooth

    if (Serial.available()>0) {
        estado = Serial.read();
    }
    if (estado == 'f') {
        velocidadCoche = 150;
        delante();
    } else if (estado == 'b') {
        velocidadCoche = 150;
        atras();
    } else if (estado == 'l') {
        velocidadCoche = 100;
        izquierda();
    } else if (estado == 'r') {
        velocidadCoche = 150;
        derecha();
    } else if (estado == 'c') {
        velocidadCoche = 100;
        parar();
    } else if (estado == 'o') {
        // velocidadCoche = 0;
        // func_1();
    } else if (estado == 'm') {
        delante();
        delay(1000);
        parar();
    }
    //else {
        //velocidadCoche = 0;
        //parar();
    //}
}

void func_3() {
    int distanciaD = 0;
    int distanciaI = 0;
    int prueba = 0;
    GetDistance();
    delay(30);
    Serial.print("Distancia = ");
    Serial.print(distancia);
    Serial.println("cm ");
    // Serial.print(Serial.available());
    // Serial.print(Serial.read());
    
    if (distancia < 1200) {
        if (random(1,100) > 50) {
          velocidadCoche = 150;
          atras();
          delay(250);
          derecha();
          delay(random(3,5)*1000);
        } else {
          velocidadCoche = 150;
          atras();
          delay(250);
          izquierda();
          delay(random(3,5)*1000);
        }
        parar();
        // derecha();
    } else if (distancia <= 2000){
        // Bajamos velocidad por si acaso
        Serial.print("Delante pa alante de frente");
        delante();
        velocidadCoche = 80;
    } else if (distancia <= 3000) {
        // Bajamos velocidad por si acaso
        Serial.print("Delante pa alante de frente");
        delante();
        velocidadCoche = 150;
    } else {
        // Bajamos velocidad por si acaso
        Serial.print("Delante pa alante de frente");
        delante();
        velocidadCoche = 200;
    }
}

void func_4() {
    int distanciaD = 0;
    int distanciaI = 0;
    int prueba = 0;
    GetDistance();
    delay(30);
    Serial.print("Distancia = ");
    Serial.print(distancia);
    Serial.println("cm ");

    if (distancia < 1500) {
        int aleatorio = random(1,3);
        if (aleatorio == 1) {
            // 180 Grados y tirar pa adelante
            velocidadCoche = 150;
            atras();
            delay(1000);
            parar();
            delay(250);
            velocidadCoche = 200;
            derecha();
            delay(1400);
            parar();
        } else if (aleatorio == 2) {
            // Girar derecha y hacia delante
            parar();
            delay(500);
            velocidadCoche = 200;
            izquierda();
            delay(1400);
            parar();
        } else {
            // Girar derecha y hacia delante
            parar();
            delay(500);
            velocidadCoche = 200;
            izquierda();
            delay(1400);
            parar();
        }
    } else if (distancia <= 2000){
        // Bajamos velocidad por si acaso
        Serial.print("Delante pa alante de frente");
        velocidadCoche = 120;
        delante();
    } else if (distancia <= 3000) {
        // Bajamos velocidad por si acaso
        Serial.print("Delante pa alante de frente");
        velocidadCoche = 150;
        delante();
    } else {
        // Bajamos velocidad por si acaso
        Serial.print("Delante pa alante de frente");
        velocidadCoche = 200;
        delante();
    }
}

// void func_5() {
void loop() {
    if (!revisando) {
        GetDistance();
        delay(30);
        Serial.print("Distancia = ");
        Serial.print(distancia);
        Serial.println("cm ");

        if (distancia < 1500) {
            parar();
            Serial.print("Voy par la funcion");
            func_6();
            delay(1000);
            while (revisando) {
                delay(100);
            }
            Serial.print("Acabo la espera y te enseño lo que tengo");

            // Si las dos izquierdas tienen más de 1700 le dejo pasar o Si las dos derechas tienen más de 1700 le dejo pasar
            if ((tdst[2][3] > 1700 && tdst[1][3] > 1700) || (tdst[1][1] > 1700 && tdst[2][2] > 1700)) {
                velocidadCoche = 200;
                // Revisamos cual de los lados es el que puedo girar y giro
                bool canD = false;
                bool canI = false;
                if (tdst[2][3] > 1700 && tdst[1][3] > 1700) {
                    canD = true;
                }
                if (tdst[1][1] > 1700 && tdst[2][2] > 1700) {
                    canI = true;
                }
                
                if (canD == true && canI == true) {
                    if (random(1,100) > 50) {
                        // Va derecha
                        derecha();
                        delay(750);
                        parar();
                    } else {
                        // Va izquierda
                        izquierda();
                        delay(750);
                        parar();
                    }
                } else if (canD == true) {
                    // Va derecha
                    derecha();
                    delay(750);
                    parar();
                } else if (canI == true) {
                    // Va izquierda
                    izquierda();
                    delay(750);
                    parar();
                } else {
                    // ERRORERRORERRORERRORERRORERRORERRORERROR //
                }

            // Si la izquierda total o la derecha total son mayor a 1700
            } else if (tdst[2][3] > 1700 || tdst[2][2] > 1700) {
                velocidadCoche = 200;
                // Revisamos cual de los dos es el que puedo girar y giro
                bool canD = false;
                bool canI = false;
                if (tdst[2][3] > 1700) {
                    canD = true;
                }
                if (tdst[2][2] > 1700) {
                    canI = true;
                }
                if (canD == true && canI == true) {
                    if (random(1,100) > 50) {
                        // Va derecha
                        derecha();
                        delay(750);
                        parar();
                    } else {
                        // Va izquierda
                        izquierda();
                        delay(750);
                        parar();
                    }
                } else if (canD == true) {
                    // Va derecha
                    derecha();
                    delay(750);
                    parar();
                } else if (canI == true) {
                    // Va izquierda
                    izquierda();
                    delay(750);
                    parar();
                } else {
                    // ERRORERRORERRORERRORERRORERRORERRORERROR //
                }

            // SI NO funciona nada de lo anterior, echo para atrás un poco y giro hacia derecha o izquierda
            } else {
                velocidadCoche = 150;
                atras();
                delay(1000);
                parar();
                delay(250);
                velocidadCoche = 200;
                if (random(1,100) > 50) {
                    // Giramos derecha
                    derecha();
                    delay(400);
                    parar();
                } else {
                    // Giramos izquierda
                    izquierda();
                    delay(400);
                    parar();
                }
            }


        } else if (distancia <= 2000){
            // Bajamos velocidad por si acaso
            Serial.print("Delante pa alante de frente 1");
            velocidadCoche = 100;
            delante();
        } else if (distancia <= 3000) {
            // Bajamos velocidad por si acaso
            Serial.print("Delante pa alante de frente 2");
            velocidadCoche = 100;
            delante();
        } else {
            // Bajamos velocidad por si acaso
            Serial.print("Delante pa alante de frente 3");
            velocidadCoche = 200;
            delante();
        }
    }
}

void func_6() {
    revisando = true;

    // Miro de derecha y guardo variable en 2 3
    servoMotor.write(0); // Miramos de derecha
    delay(500);
    GetDistance();
    delay(30);
    tdst[2][3] = distancia;
    Serial.print("Distancia derecha");
    Serial.println(tdst[2][3]);
    delay(1000);

    // Miro de derecha/mitad y guardo variable en 1 3
    servoMotor.write(45); // Miramos de derecha/mitad
    delay(1000);
    GetDistance();
    delay(30);
    tdst[1][3] = distancia;
    Serial.print("Distancia derecha/mitad");
    Serial.println(tdst[1][3]);
    delay(1000);

    // Miro de frente y guardo variable en 1 2
    servoMotor.write(90); // Miramos de frente
    delay(1000);
    GetDistance();
    delay(30);
    tdst[1][2] = distancia;
    Serial.print("Distancia centro");
    Serial.println(tdst[1][2]);
    delay(1000);

    // Miro de izquierda/mitad y guardo variable en 1 1
    servoMotor.write(135); // Miramos de izquierda/mitad
    delay(1000);
    GetDistance();
    delay(30);
    tdst[1][1] = distancia;
    Serial.print("Distancia izquierda/mitad");
    Serial.println(tdst[1][1]);
    delay(1000);

    // Miro izquierda
    servoMotor.write(180); // Miramos de izquierda
    delay(1000);
    GetDistance();
    delay(30);
    tdst[2][2] = distancia;
    Serial.print("Distancia izquierda");
    Serial.println(tdst[2][2]);
    delay(1500);
    servoMotor.write(90);
    delay(1000);


    revisando = false;
}

// void loop() {
//     if (!revisando){
//         func_6();
//     } else {
//         delay(1000);
//     }
    // delay(1000);
    // servoMotor.write(90); // Miramos de derecha
    // delay(1000);
    // servoMotor.write(45); // Miramos de derecha/mitad
    // delay(1000);
    // servoMotor.write(90); // Miramos de frente
    // delay(1000);
    // servoMotor.write(135); // Miramos de izquierda/mitad
    // delay(1000);
    // servoMotor.write(180); // Miramos de izquierda
    // delay(1000);
// }
