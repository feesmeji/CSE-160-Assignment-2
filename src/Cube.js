class Cube{
    constructor(){
        this.type='cube';
        // this.position = [0.0, 0.0, 0.0];
        this.color = [1.0,1.0,1.0,1.0];
        // this.size = 5.0;
        // this.segments = 3;
        this.matrix = new Matrix4();
    }
    render() {
        // var xy = this.position;
        var rgba = this.color;
        // var size = this.size;

        //Pass color of a point to u_FragColor var
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);


        // Pass the color of a point to u_FragColor uniform variable
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);        

        // //Draw 
        // var d = this.size/200.0; //delta


        //Pass the matrix to u_model_matrix attribute
    //    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
        // let angleStep=360/this.segments;
        // for(var angle = 0; angle < 360; angle=angle+angleStep){
        //     let centerPt = [xy[0], xy[1]];
        //     let angle1=angle;
        //     let angle2 = angle+angleStep;
        //     let vec1 = [Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d];
        //     let vec2 = [Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d];
        //     let pt1 = [centerPt[0]+vec1[0], centerPt[1]+vec1[1]];
        //     let pt2 = [centerPt[0]+vec2[0], centerPt[1]+vec2[1]];

        //     drawTriangle( [xy[0], xy[1], pt1[0], pt1[1], pt2[0], pt2[1]] );

        // }

        //Front of cube
        drawTriangle3D( [0,0,0,  1,1,0,  1,0,0 ]);
        drawTriangle3D( [0,0,0,  0,1,0,  1,1,0 ]);


        //Back of cube (when drawing things, webgl renders objects closer to the camera when the z coordinate is less than zero. Further away from camera if z axis is greater than zero)
        drawTriangle3D( [0,0,1,  1,1,1,  1,0,1 ]);
        drawTriangle3D( [0,0,1,  0,1,1,  1,1,1 ]);
        // Fake lighting (Pass the color of a point to u_FragColor uniform variable)
        gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);

        //Top of cube
        drawTriangle3D( [0,1,0,   0,1,1,  1,1,1]);
        drawTriangle3D( [0,1,0,   1,1,1,  1,1,0]);
        

        //Right side of cube
        drawTriangle3D([1,1,1,   1,0,1,    1, 0, 0])// right side of cube triangle 1
        drawTriangle3D([1,1,1,   1,1,0,    1, 0, 0])//right side of cube triangle 2

        //Left side of triangle
        drawTriangle3D([0,0,0,   0,1,0,   0,1,1]) //left side of cube triangle 1
        drawTriangle3D([0,0,0,   0,0,1,   0,1,1]) //left side of cube triangle 2
        // // ChatGPT helped me come up with these lines of code
        // drawTriangle3D([0, 0, 0, 1, 1, 0, 1, 0, 0]);
        // drawTriangle3D([0, 0, 0, 0, 1, 0, 1, 1, 0]); // Left
        // drawTriangle3D([1, 0, 0, 1, 1, 1, 1, 0, 1]); // Right (first triangle)
        // //drawTriangle3D([1, 1, 1, 1, 1, 0, 1, 0, 1]); // Right (second triangle)

        // drawTriangle3D([0, 0, 0, 1, 0, 0, 1, 0, 1]); // Bottom
        // drawTriangle3D([0, 0, 1, 1, 0, 1, 1, 1, 1]); // Back
        // //drawTriangle3D([0, 0, 0, 0, 1, 1, 0, 1, 0]); // Left (second triangle)


        // Other sides of cube top, bottom, left, right, back
        // <fill this in yourself>
    }
}