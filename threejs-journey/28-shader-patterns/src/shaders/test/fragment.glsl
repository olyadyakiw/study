#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

float random (vec2 st) {
    return fract(sin(dot(st.xy,vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

void main()
{
    // Pattern 3
    // float strenght = vUv.x;

    // Pattern 4
    // float strenght = vUv.y;

    // Pattern 5
    // float strenght = 1.0 - vUv.y;

    // Pattern 6
    // float strenght = vUv.y * 10.0;

    // Pattern 7
    // float strenght = mod(vUv.y * 10.0, 1.0);

    // Pattern 8
    // float strenght = mod(vUv.y * 10.0, 1.0);
    // strenght = step(0.5, strenght);

    // Pattern 9
    // float strenght = mod(vUv.y * 10.0, 1.0);
    // strenght = step(0.8, strenght);

    // Pattern 10
    // float strenght = mod(vUv.x * 10.0, 1.0);
    // strenght = step(0.8, strenght);

    // Pattern 11
    // float strenght = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strenght += step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 12
    // float strenght = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strenght *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 13
    // float strenght = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strenght *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 14
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.4, mod(vUv.y * 10.0, 1.0));
    // barY *= step(0.8, mod(vUv.x * 10.0, 1.0));

    // float strenght = barY + barX;

    // Pattern 15
    // float barX = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    // barX *= step(0.4, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));
    // barY *= step(0.4, mod(vUv.x * 10.0, 1.0));

    // float strenght = barY + barX;

    // Pattern 16
    // float strenght = abs(vUv.x - 0.5);

    // Pattern 17
    // float strenght = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 18
    // float strenght = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 19
    // float strenght = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // Pattern 20
    // float square1 = 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float square2 = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    
    // float strenght = square1 * square2;

    // Pattern 21
    // float strenght = floor(vUv.x * 10.0) / 10.0;

    // Pattern 22
    // float strenght = floor(vUv.x * 10.0) / 10.0;
    // strenght *= floor(vUv.y * 10.0) / 10.0;

    // Pattern 23
    // float strenght = random(vUv);

    // Pattern 24
    // vec2 gridUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //     floor(vUv.y * 10.0) / 10.0
    // );
    // float strenght = random(gridUv);

    // Pattern 25
    // vec2 gridUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //     floor((vUv.y + vUv.x * 0.5) * 10.0) / 10.0
    // );
    // float strenght = random(gridUv);

    // Pattern 26
    // float strenght = length(vUv);

    // Pattern 27 
    // float strenght = length(vUv - 0.5);
    // float strenght = distance(vUv, vec2(0.5));

    // Pattern 28
    // float strenght = 1.0 - distance(vUv, vec2(0.5));

    // Pattern 29
    // float strenght = 0.015 / distance(vUv, vec2(0.5));

    // Pattern 30
    // vec2 lightUv = vec2(
    //     vUv.x * 0.1 + 0.45,
    //     vUv.y * 0.5 + 0.25
    // );

    // Pattern 31
    // vec2 lightUvX = vec2( vUv.x * 0.1 + 0.45, vUv.y * 0.5 + 0.25 );
    // float lightX =  0.015 / distance(lightUvX, vec2(0.5));

    // vec2 lightUvY = vec2( vUv.y * 0.1 + 0.45, vUv.x * 0.5 + 0.25 );
    // float lightY =  0.015 / distance(lightUvY, vec2(0.5));
    
    // float strenght = lightX * lightY;

    // Pattern 32

    vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
    vec2 lightUvX = vec2( rotatedUv.x * 0.1 + 0.45, rotatedUv.y * 0.5 + 0.25 );
    float lightX =  0.015 / distance(lightUvX, vec2(0.5));

    vec2 lightUvY = vec2( rotatedUv.y * 0.1 + 0.45, rotatedUv.x * 0.5 + 0.25 );
    float lightY =  0.015 / distance(lightUvY, vec2(0.5));
    
    float strenght = lightX * lightY;

    gl_FragColor = vec4(strenght, strenght, strenght, 1.0);
}