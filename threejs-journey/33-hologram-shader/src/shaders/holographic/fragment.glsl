uniform float uTime;
uniform vec3 uColor;

varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    // Final color
    vec3 normal = normalize(vNormal);    
    if(!gl_FrontFacing) {
        normal *= -1.0;
    }

    float stripes = pow(mod((vPosition.y - uTime * 0.02) * 20.0, 1.0), 3.0);
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    //faloff
    float falloff = smoothstep(0.8, 0.0, fresnel); 

    // holofraphic
    float holofraphic = stripes * fresnel;
    holofraphic += fresnel * 1.25;
    holofraphic = holofraphic * falloff;



    gl_FragColor = vec4(uColor.r, uColor.g, uColor.b, holofraphic);
    // gl_FragColor = vec4(vNormal, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}